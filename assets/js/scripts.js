$(function(){
    
    //smooth anchor scroll
    $('.navigatiinLink').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        $('#mobileMenu').toggleClass('make-visible');
        $('body').removeClass('disableBodyScroll');
        return false;
    });

    $('#mobileMenuNavigation .navigatiinLink').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;

    });

    //open form
    $('.blockClick').click(function() {
        $('.transparentFormWrapper').toggleClass('makeVisible');
    });


    //change image on plans
    $('.turnImages').click(function() {
        $('.planImage').toggleClass('no-height');

        var text = $('.turnImages').text();
        $('.turnImages').text(
            text == "Возможный вариант планировки" ? "Свободная планировка" : "Возможный вариант планировки");
    });

    //open mobile menu
    $('.burgerMenu').click(function () {
        $('#mobileMenu').toggleClass('make-visible');
        $('body').addClass('disableBodyScroll')
    });
    
    //close mobile menu
    $('.close-button-menu').click(function () {
        $('#mobileMenu').toggleClass('make-visible');
        $('body').removeClass('disableBodyScroll');
    });

    //tabs plans
    var tabWrapper = $('#tab-block'),
    tabMnu = tabWrapper.find('.tab-mnu  li'),
    tabContent = tabWrapper.find('.tab-cont > .tab-pane');

    tabContent.not(':first-child').hide();

    tabMnu.each(function(i){
        $(this).attr('data-tab','tab'+i);
    });
    tabContent.each(function(i){
        $(this).attr('data-tab','tab'+i);
    });

    tabMnu.click(function(){
        var tabData = $(this).data('tab');
        tabWrapper.find(tabContent).hide();
        tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
    });

    
    $('.tab-mnu > li').click(function(){
        var before = $('.tab-mnu li.active');
        before.removeClass('active');
        $(this).addClass('active');
    });

    //toggling active class throw infrastructure
    $('.infrastructureButton').click(function() {
        $('.activeButton').removeClass('activeButton');
        $(this).addClass('activeButton');
    });

    //making divs of similar height
    $.fn.equivalent = function (){
        //запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks
        var $blocks = $(this),
            //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
            maxH    = $blocks.eq(0).height();
        //делаем сравнение высоты каждого блока с максимальной
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        //устанавливаем найденное максимальное значение высоты для каждого блока jQuery выборки
        $blocks.height(maxH);
    }
    //применяем нашу функцию в элементам jQuery выборки - $('.nav')
    $('.svgWrapper').equivalent();
});

function scrollNav() {
    $('.downArrow').click(function(){  
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 0
      }, 500);
      return false;
    });
    $('.downArrow').scrollTop();
}
scrollNav();

$(window).scroll(function() {
    if ($(this).scrollTop() > 799) {
      $('.transparentFormWrapper').fadeIn();
    }else {
        $('.transparentFormWrapper').fadeOut();
  }
});


//close Задать вопрос on outside click
$(document).mouseup(function(e) 
{
    var container = $('.transparentFormWrapper');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.hasClass('makeVisible') && container.has(e.target).length === 0) 
    {
        container.removeClass('makeVisible');
    }
});