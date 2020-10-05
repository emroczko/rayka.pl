<?php

$myemail = "kontakt@rayka.pl";

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = 'secret code not available';
$recaptcha_response = $_POST['recaptcha_response'];

$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);

if ($recaptcha->success == true && $recaptcha->score >= 0.5 && $recaptcha->action == 'contact') {
    
    $from = $_POST["email"];
    $text = $_POST["message"];
    mail($myemail, "Temat", $text, $from);  
    $success_output = "Twoja wiadomość została wysłana!";
} else {
    $error_output = "Coś poszło nie tak. Spróbuj ponownie.";
}

$output = array(
    'error'     =>  $error_output,
    'success'   =>  $success_output
);

echo json_encode($output);

?>
