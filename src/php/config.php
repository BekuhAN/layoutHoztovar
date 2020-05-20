<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		 // require_once($_SERVER['DOCUMENT_ROOT'] . '/php/phpmailer/smtp.php');
		 // const HOST = '';
		 // const LOGIN = '';
		 // const PASS = '';
		 // const PORT = '';

		// *** /SMTP *** //
   
    const SENDER = 'bekuhan@yandex.ru';
    const CATCHER = 'sozvezdie-pizza@yandex.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    