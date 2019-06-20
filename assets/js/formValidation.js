/* ajax form */

function checkContactsSubmit() {
            var form = $('#contactsForm');
            var form_data = form.serialize(); //собераем все данные из формы
            var name = $('#contactsForm').find('input[name=name]').val();
            var phone = $('#contactsForm').find('input[name=tel]').val();
            //var email = $('#bottomForm').find('input[name=email]').val();
            var reTel = /^[\d ()+-]+$/;
            //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(name.length == 0 || phone.length == 0) {
                $('#result').html("Заполните все обязательные поля");
                return false;
            } else if(!reTel.test(phone)) {
                $('#result').html("Неправильный формат телефона, используйте только цифры, символы '+', '-' ");
                return false;
            } 

            
            //setTimeout()
            setTimeout(function() { $(form)[0].reset(); }, 1000);
            return true;
}

function checkInfrastructureSubmit() {
        var form = $('#infrastructureForm');
        var form_data = form.serialize(); //собераем все данные из формы
        var name = $('#infrastructureForm').find('input[name=name]').val();
        var phone = $('#infrastructureForm').find('input[name=tel]').val();
        //var email = $('#bottomForm').find('input[name=email]').val();
        var reTel = /^[\d ()+-]+$/;
        //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length == 0 || phone.length == 0) {
            $('#resultContacts').html("Заполните все обязательные поля");
            return false;
        } else if(!reTel.test(phone)) {
            $('#resultContacts').html("Неправильный формат телефона, используйте только цифры, символы '+', '-' ");
            return false;
        }

        //$(form)[0].reset();
        setTimeout(function() { $(form)[0].reset(); }, 1000);
        return true;
}

function checkSignFormSubmit() {
    var form = $('#signForm');
    var form_data = form.serialize(); //собераем все данные из формы
    var name = $('#signForm').find('input[name=name]').val();
    var phone = $('#signForm').find('input[name=tel]').val();
    //var email = $('#bottomForm').find('input[name=email]').val();
    var reTel = /^[\d ()+-]+$/;
    //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name.length == 0 || phone.length == 0) {
        $('#signFromResult').html("Заполните все обязательные поля");
        return false;
    } else if(!reTel.test(phone)) {
        $('#signFromResult').html("Неправильный формат телефона, используйте только цифры, символы '+', '-' ");
        return false;
    }

    //$(form)[0].reset();
    setTimeout(function() { $(form)[0].reset(); }, 1000);
    return true;
}

function checkTransparentForm() {
    var form = $('#transparentForm');
    var form_data = form.serialize(); //собераем все данные из формы
    var name = $('#transparentForm').find('input[name=name]').val();
    var phone = $('#transparentForm').find('input[name=tel]').val();
    var email = $('#transparentForm').find('input[name=email]').val();
    var reTel = /^[\d ()+-]+$/;
    var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name.length == 0 || phone.length == 0 || email.length == 0) {
        $('#transparentResult').html("Заполните все обязательные поля");
        return false;
    } else if(!reTel.test(phone)) {
        $('#transparentResult').html("Неправильный формат телефона, используйте только цифры, символы '+', '-' ");
        return false;
    } else if(!reEmail.test(email)) {
        $('#transparentResult').html("Неправильный формат email ");
        return false;
    }

    //$(form)[0].reset();
    setTimeout(function() { $(form)[0].reset(); }, 1000);
    return true;
}

$(function(){
    $("#getPDFSubmit").on('click', function() { //устанавливаем событие отправки для формы с id=form
        var form = $('#formGetPDF');
        var form_data = form.serialize(); //собераем все данные из формы
        var name = $('#formGetPDF').find('input[name=name]').val();
        var phone = $('#formGetPDF').find('input[name=tel]').val();
        var email = $('#formGetPDF').find('input[name=email]').val();
        var reTel = /^[\d ()+-]+$/;
        var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name.length == 0 || phone.length == 0 || email.length == 0) {
            $('#pdfResult').html("Заполните все обязательные поля");
        } else if(!reTel.test(phone)) {
            $('#pdfResult').html("Неправильный формат телефона, используйте только цифры, символы '+', '-' ");
        } else if(!reEmail.test(email)) {
            $('#pdfResult').html("Неправильный формат email ");
        } else {
            $.ajax({
                type: "POST", //Метод отправки
                url: "main-form-pdf.php", //путь до php фаила отправителя
                data: form_data,
                success: function(response) {
                    // jQuery('modalFormSign').modal().hide();
                    // jQuery("a.download").attr('href', 'detailed-plans.pdf');
                    // jQuery("a.download").css('opacity', '1');

                    document.getElementsByClassName("download")[0].click()
                    
                },
                error: function(response) {
                    $('#pdfResult').html("Возникла ошибка при отправке формы, попробуйте еще раз");
                }
            });
        }
    });
});