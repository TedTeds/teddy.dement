<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = 'Message de mon site web';

    $to = 'Teddy.dmt@outlook.com';
    $headers = "De: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès";
    } else {
        echo "Échec de l'envoi de l'email";
    }
}
?>