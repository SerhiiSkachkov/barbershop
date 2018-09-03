<?php

$recepient = "sergeyskachkov01@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$city = trim($_POST["city"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
		if($city){

			$massage.="Город: ";
			$massage.=$city;
			$massage.="\n";
		}

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");