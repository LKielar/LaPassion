<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

 if ($_POST) {
  $to = "kilm1@o2.pl";
  $name = $_POST['contact-name'];
  $subject = $_POST['contact-subject'];
  $message = $_POST['contact-msg'];
  $from = 'contact@lapassionhair.co.uk';
  $email = $_POST['contact-mail'];
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);
  $email = filter_var($email, FILTER_VALIDATE_EMAIL);
  if ($email != $_POST['contact-mail']) {
      echo 'Please enter Valid email address!';
      return ;
  } else {
  $headers = "From:" . $from;
  $txt = "Imię: " . $name . "\n" . "Temat: " . $subject . "\n\n" . "Wiadomość: " . $message . "\n\n" . "Wyślij odpowiedź do: " . $email ;
  mail($to, $subject, $txt, $headers);
  header('Location: contact.html');
  }
}
?>