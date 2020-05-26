<meta charset="UTF-8" />
<?php

if (isset($_POST['subEmail'])) {$subEmail = $_POST['subEmail']; if ($subEmail == '') {unset($subEmail);}}
  
if (isset($subEmail)){
  
$temma = "Заявка на рассылку новостей ";
$address = "your-mail@rambler.ru";
$mes = "Тема: $temma \nПочта: $subEmail";
$headers = "From: <info@your_site_mail.ru\r\n"; 
$send = mail ($address,$temma,$mes,$headers);
if ($send == 'true'){
	echo "Сообщение отправлено";
	}
	else {
		echo "Ой, что-то пошло не так";}
	}
	else {
		echo "Заполните все поля";
	}
?>