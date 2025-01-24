<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars(trim($_POST['name']));
    $mail = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if(!empty($name) && !empty($email) && !empty($message)){
        $to = 'haddadi.nael@gmail.com';
        $subject = "eMail portfolio de $name";
        $body = "Nom: $name\nEmail: $email\n\nMessage: \n$message";
        $headers = "From: $email";

        if (mail($to,$subject,$body, $headers)){
            echo "Votre message a été envoyé avec succès !";

        } else {
            echo "erreur survenue lors de l'envoi du message.";

        }
    } else {
        echo 'Veuillez remplir tout les champs'; 
    }
} else{
    echo "Formulaire non soumis correctement.";
}