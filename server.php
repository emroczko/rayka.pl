<?php

$myemail = "kontakt@rayka.pl";


//if(isset($_POST['email']) && isset($_POST['message']) ){
    $from = $_POST['email'];
    $text = $_POST['message'];
    mail($myemail, "Temat", $text, $from);
//}
?>
