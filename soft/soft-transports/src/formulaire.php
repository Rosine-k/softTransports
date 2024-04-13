<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $date_dem = $_POST['date_dem'];
    $ville_dep = $_POST['ville_dep'];
    $ville_arr = $_POST['ville_arr'];
    $adresse = $_POST['adresse'];
    $volume = $_POST['volume'];
    $remarques = $_POST['remarques'];
    $formule = $_POST['formule'];
    $options = isset($_POST['options']) ? implode(', ', $_POST['options']) : '';

    // Construction du message
    $message = "Nom: $nom\n";
    $message .= "Prénom: $prenom\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Email: $email\n";
    $message .= "Date de déménagement: $date_dem\n";
    $message .= "Ville de départ: $ville_dep\n";
    $message .= "Ville d'arrivée: $ville_arr\n";
    $message .= "Adresse: $adresse\n";
    $message .= "Volume en m²: $volume\n";
    $message .= "Formule souhaitée: $formule\n";
    $message .= "Options: $options\n";
    $message .= "Remarques: $remarques\n";

    // Envoi de l'e-mail
    $to = "kabore.rosine75@gmail.com";
    $subject = "Demande de devis de déménagement";
    $headers = "From: $email";

    // Envoi de l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre demande de devis a été envoyée avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre demande de devis.";
    }
} else {
    echo "Une erreur s'est produite lors du traitement de votre demande.";
}
?>
