<?php

$recepient = "sergeyskachkov01@gmail.com";
$sitename = "BADBOYS";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$mail =  trim($_POST["mail"]);
$message = "Имя: $name \nТелефон: $phone \nЭмеил: $mail \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");