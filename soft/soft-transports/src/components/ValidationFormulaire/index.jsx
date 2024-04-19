//Création des expressions régulières
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let nameRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
let textRegExp = new RegExp('^([A-Za-z0-9]+\.[A-Za-z0-9]+(\r)?(\n)?)+$');
let telRegExp = new RegExp('^((\+)33|0|0033)[1-9](\d{2}){4}$/g');
let dateRegExp = new RegExp('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$');
let numberRegExp = new RegExp('[0-9]');

// validation du nom
function validLastName() {
    let isvalid = true;
    let inputLastName = document.getElementById('nom');

    let lastNameErrorMsg = document.getElementById('nomError');

    if (inputLastName.value === "") {
        lastNameErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre nom.';
        isvalid = false;
    }
    else if (nameRegExp.test(inputLastName.value)) {
        lastNameErrorMsg.innerHTML = '';
    } else {
        lastNameErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre nom.';
        isvalid = false;
    }
    return isvalid;
}

// validation du prénom
function validFirstName() {
    let isvalid = true;
    let inputFirstName = document.getElementById('prenom');

    let firstNameErrorMsg = document.getElementById('prenomError');
 
    if (inputFirstName.value === "") {
        firstNameErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre prénom.';
        isvalid = false;
    }
    else if (nameRegExp.test(inputFirstName.value)) {
        firstNameErrorMsg.innerHTML = '';
    } else {
        firstNameErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre prénom.';
        isvalid = false;
    }
    return isvalid;
}

// validation du telephone
function validTelephone() {
    let isvalid = true;
    let inputTelephone = document.getElementById('telephone');

    let telephoneErrorMsg = document.getElementById('telephoneError');
 
    if (inputTelephone.value === "") {
        telephoneErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre téléphone.';
        isvalid = false;
    }
    else if (telRegExp.test(inputTelephone.value)) {
        telephoneErrorMsg.innerHTML = '';
    } else {
        telephoneErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre téléphone.';
        isvalid = false;
    }
    return isvalid;
}

// validation de l'email
function validEmail() {
    let isvalid = true;
    let inputEmail = document.getElementById('email');

    let emailErrorMsg = document.getElementById('emailError');

    if (inputEmail.value === "") {
        emailErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre adresse email.';
        isvalid = false;
    }
    else if (emailRegExp.test(inputEmail.value)) {
        emailErrorMsg.innerHTML = '';
    } else {
        emailErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre adresse email.';
        isvalid = false;
    }
    return isvalid;
}

// validation de la date
function validDate() {
    let isvalid = true;
    let inputDate = document.getElementById('date');

    let dateErrorMsg = document.getElementById('dateError');

    if (inputDate.value === "") {
        dateErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre date.';
        isvalid = false;
    }
    else if (dateRegExp.test(inputDate.value)) {
        dateErrorMsg.innerHTML = '';
    } else {
        dateErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre date.';
        isvalid = false;
    }
    return isvalid;
}

// validation de la ville de départ
function validVilleDep() {
    let isvalid = true;
    let inputVilleDep = document.getElementById('ville_dep');

    let villeDepErrorMsg = document.getElementById('villeDepError');
 
    if (inputVilleDep.value === "") {
        villeDepErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre ville de départ.';
        isvalid = false;
    }
    else if (nameRegExp.test(inputVilleDep.value)) {
        villeDepErrorMsg.innerHTML = '';
    } else {
        villeDepErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre ville de départ.';
        isvalid = false;
    }
    return isvalid;
}

// validation de la ville d'arrivée
function validVilleArr() {
    let isvalid = true;
    let inputVilleArr = document.getElementById('ville_arr');

    let villeArrErrorMsg = document.getElementById('villeArrError');
 
    if (inputVilleArr.value === "") {
        villeArrErrorMsg.innerHTML = "Champ invalide, veuillez saisir votre ville d'arrivée.";
        isvalid = false;
    }
    else if (nameRegExp.test(inputVilleArr.value)) {
        villeArrErrorMsg.innerHTML = '';
    } else {
        villeArrErrorMsg.innerHTML = "Champ invalide, veuillez vérifier votre ville d'arrivée.";
        isvalid = false;
    }
    return isvalid;
}

// validation de l'adresse
function validAdresse() {
    let isvalid = true;
    let inputAdresse = document.getElementById('adresse');

    let adresseErrorMsg = document.getElementById('adresseError');
 
    if (inputAdresse.value === "") {
        adresseErrorMsg.innerHTML = "Champ invalide, veuillez saisir votre adresse.";
        isvalid = false;
    }
    else if (textRegExp.test(inputAdresse.value)) {
        adresseErrorMsg.innerHTML = '';
    } else {
        adresseErrorMsg.innerHTML = "Champ invalide, veuillez vérifier votre adresse.";
        isvalid = false;
    }
    return isvalid;
}

// validation du volume
function validVolume() {
    let isvalid = true;
    let inputVolume = document.getElementById('volume');

    let volumeErrorMsg = document.getElementById('volumeError');
 
    if (inputVolume.value === "") {
        volumeErrorMsg.innerHTML = "Champ invalide, veuillez saisir le volume.";
        isvalid = false;
    }
    else if (numberRegExp.test(inputVolume.value)) {
        volumeErrorMsg.innerHTML = '';
    } else {
        volumeErrorMsg.innerHTML = "Champ invalide, veuillez vérifier le volume.";
        isvalid = false;
    }
    return isvalid;
}

// envoie du formulaire
function sendFormulaire(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Validation des champs du formulaire
    if (!validLastName() || !validFirstName() || !validTelephone() || !validEmail() || !validDate() || !validVilleDep() || !validVilleArr() || !validAdresse() || !validVolume()) {
        alert("Vérifiez les champs !");
        return;
    }

    // Récupération des données du formulaire
    var params = {
        nom : document.getElementById('nom').value,
        prenom : document.getElementById('prenom').value,
        telephone : document.getElementById('telephone').value,
        email : document.getElementById('email').value,
        date_dem : document.getElementById('date_dem').value,
        ville_dep : document.getElementById('ville_dep').value,
        ville_arr : document.getElementById('ville_arr').value,
        adresse : document.getElementById('adresse').value,
        volume : document.getElementById('volume').value,
        remarques : document.getElementById('remarques').value,
        formule : document.querySelector('input[name="formule"]:checked').value,
    };

    var options = document.querySelectorAll('input[name="options"]:checked');
    options.forEach(function(option) {
        params['options[]'] = option.value;
    });

    // Envoi des données via emailjs
    emailjs.sendForm("service_3l6pg5i", "template_nejy1zj", params).then(function(res) {
        alert("Message envoyé" + res.status);
    }).catch(function(error) {
        console.error("Erreur lors de l'envoi du message:", error);
    });
}



// // Ajout d'un gestionnaire d'événements pour le formulaire
// document.getElementById("form").addEventListener("submit", sendForm);


//   // var formData = new FormData(); 
//     // formData.append('nom', document.getElementById('nom').value);
//     // formData.append('prenom', document.getElementById('prenom').value);
//     // formData.append('telephone', document.getElementById('telephone').value);
//     // formData.append('email', document.getElementById('email').value);
//     // formData.append('date_dem', document.getElementById('date_dem').value);
//     // formData.append('ville_dep', document.getElementById('ville_dep').value);
//     // formData.append('ville_arr', document.getElementById('ville_arr').value);
//     // formData.append('adresse', document.getElementById('adresse').value);
//     // formData.append('volume', document.getElementById('volume').value);
//     // formData.append('remarques', document.getElementById('remarques').value);
//     // formData.append('formule', document.querySelector('input[name="formule"]:checked').value);
//     // var options = document.querySelectorAll('input[name="options"]:checked');
//     // options.forEach(function(option) {
//     //     formData.append('options[]', option.value);
//     // });



    

//     // // Envoi des données du formulaire au script PHP
//     // var xhr = new XMLHttpRequest();
//     // xhr.open('POST', 'formulaire.php', true);
//     // xhr.onload = function() {
//     //     if (xhr.status === 200) {
//     //         alert(xhr.responseText);
//     //         // Réinitialisation du formulaire après l'envoi
//     //         document.getElementById('form').reset();
//     //     } else {
//     //         alert('Une erreur s\'est produite lors de l\'envoi de votre demande.');
//     //     }
//     // };
//     // xhr.send(formData);

// // function sendForm() {

// //     let inputFirstName = document.getElementById('prenom');
// //     let inputLastName = document.getElementById('nom');
// //     let inputTelephone = document.getElementById('telephone');
// //     let inputEmail = document.getElementById('email');
// //     let inputDate = document.getElementById('date');
// //     let inputVilleDep = document.getElementById('ville_dep');
// //     let inputVilleArr = document.getElementById('ville_arr');
// //     let inputAdresse = document.getElementById('adresse');
// //     let inputVolume = document.getElementById('volume');

// //     // si tous les champs ne sont pas valides
// //     if (!validLastName() || !validFirstName() || !validTelephone() || !validEmail() || !validDate() || !validVilleDep() || !validVilleArr() || !validAdresse() || !validVolume()) {
// //         alert("Vérifiez les champs !");
// //     }

// //     // si tous les champs sont valides, envoie du formulaire
// //     else {

// //     }
// // }