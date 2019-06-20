<?php
    if(
        (isset($_POST['name'])&&$_POST['name']!="")
        && (isset($_POST['hidden'])&&$_POST['hidden']!="")
        && (isset($_POST['tel'])&&$_POST['tel']!="")
        ) {
        $to = 'clubhouse.dp@gmail.com';
        $subject = 'Ленд сlubhouse.dp.ua';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                        <p>Метка формы: '.$_POST['hidden'].'</p>                
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers  .= "From: Отправитель <admin@clubhouse.dp.ua>\r\n";
        mail($to, $subject, $message, $headers);
    }
?>

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<link href="build/styles/style.min.css?v=0.001" rel="stylesheet">

<header id="singleHeader">
	<div class="container">
		<div class="row">
				<div class="col-4 col-lg-2">
						<a href="http://clubhouse.dp.ua/">
							<img src="build/images/common/logo.png" class="logo" alt="logo">
						</a>
				</div>
			<div class="offset-lg-1 col-lg-7 hideTillHorizontalTablet">
				<ul id="navigation">
					<li>
						<a class="navigatiinLink" href="//clubhouse.dp.ua/#aboutComplex">О комплексе</a>
					</li>
					<li>
						<a class="navigatiinLink" href="//clubhouse.dp.ua/#plans">Планировки</a>
					</li>
					<li>
						<a class="navigatiinLink" href="//clubhouse.dp.ua/#infrastructure">Инфраструктура</a>
					</li>
					<li>
						<a class="navigatiinLink" href="//clubhouse.dp.ua/#gallery">Галерея</a>
					</li>
					<li>
						<a class="navigatiinLink" href="//clubhouse.dp.ua/#contacts">Контакты</a>
					</li>
				</ul>
			</div>
			<div class="col-8 col-lg-2">
				<div class="flexWrapper">
					<a class="phoneNumber" href="tel:+380981558688">098 155 86 88</a>
					<svg class="burgerMenu hideFromHorizontalTablet" width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="19" width="28" height="2" rx="1" fill="#F2F2F2"/>
						<rect x="13" width="15" height="2" rx="1" fill="#F2F2F2"/>
						<rect x="6" y="9" width="22" height="2" rx="1" fill="#F2F2F2"/>
					</svg>	
				</div>
			</div>
		</div>
	</div>
</header>

<section id="greetings">
    <div class="text-wrapper">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.4 48.6L27 57L54 84L114 24L105.6 15.6L54 67.2L35.4 48.6ZM108 60C108 86.4 86.4 108 60 108C33.6 108 12 86.4 12 60C12 33.6 33.6 12 60 12C64.8 12 69 12.6 73.2 13.8L82.8002 4.2C75.6 1.8 67.8 0 60 0C27 0 0 27 0 60C0 93 27 120 60 120C93 120 120 93 120 60H108Z" fill="#333333"/>
        </svg>
        <p class="first">
            Спасибо! <br> Ваша заявка принята.
        </p>
        <p class="second">
            Наш менеджер свяжется с Вами в ближайшее время.
        </p>
    </div>
</section>

<script>
  fbq('track', 'Lead');
</script>
