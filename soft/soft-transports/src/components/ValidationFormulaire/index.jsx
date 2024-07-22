// //Création des expressions régulières
// let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
// let nameRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
// let textRegExp = new RegExp('^([A-Za-z0-9]+\.[A-Za-z0-9]+(\r)?(\n)?)+$');
// let telRegExp = new RegExp('^((\+)33|0|0033)[1-9](\d{2}){4}$/g');
// let dateRegExp = new RegExp('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$');
// let numberRegExp = new RegExp('[0-9]');

// // validation du nom
// function validLastName() {
//     let isvalid = true;
//     let inputLastName = document.getElementById('nom');

//     let lastNameErrorMsg = document.getElementById('nomError');

//     if (inputLastName.value === "") {
//         lastNameErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre nom.';
//         isvalid = false;
//     }
//     else if (nameRegExp.test(inputLastName.value)) {
//         lastNameErrorMsg.innerHTML = '';
//     } else {
//         lastNameErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre nom.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation du prénom
// function validFirstName() {
//     let isvalid = true;
//     let inputFirstName = document.getElementById('prenom');

//     let firstNameErrorMsg = document.getElementById('prenomError');
 
//     if (inputFirstName.value === "") {
//         firstNameErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre prénom.';
//         isvalid = false;
//     }
//     else if (nameRegExp.test(inputFirstName.value)) {
//         firstNameErrorMsg.innerHTML = '';
//     } else {
//         firstNameErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre prénom.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation du telephone
// function validTelephone() {
//     let isvalid = true;
//     let inputTelephone = document.getElementById('telephone');

//     let telephoneErrorMsg = document.getElementById('telephoneError');
 
//     if (inputTelephone.value === "") {
//         telephoneErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre téléphone.';
//         isvalid = false;
//     }
//     else if (telRegExp.test(inputTelephone.value)) {
//         telephoneErrorMsg.innerHTML = '';
//     } else {
//         telephoneErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre téléphone.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation de l'email
// function validEmail() {
//     let isvalid = true;
//     let inputEmail = document.getElementById('email');

//     let emailErrorMsg = document.getElementById('emailError');

//     if (inputEmail.value === "") {
//         emailErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre adresse email.';
//         isvalid = false;
//     }
//     else if (emailRegExp.test(inputEmail.value)) {
//         emailErrorMsg.innerHTML = '';
//     } else {
//         emailErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre adresse email.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation de la date
// function validDate() {
//     let isvalid = true;
//     let inputDate = document.getElementById('date');

//     let dateErrorMsg = document.getElementById('dateError');

//     if (inputDate.value === "") {
//         dateErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre date.';
//         isvalid = false;
//     }
//     else if (dateRegExp.test(inputDate.value)) {
//         dateErrorMsg.innerHTML = '';
//     } else {
//         dateErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre date.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation de la ville de départ
// function validVilleDep() {
//     let isvalid = true;
//     let inputVilleDep = document.getElementById('ville_dep');

//     let villeDepErrorMsg = document.getElementById('villeDepError');
 
//     if (inputVilleDep.value === "") {
//         villeDepErrorMsg.innerHTML = 'Champ invalide, veuillez saisir votre ville de départ.';
//         isvalid = false;
//     }
//     else if (nameRegExp.test(inputVilleDep.value)) {
//         villeDepErrorMsg.innerHTML = '';
//     } else {
//         villeDepErrorMsg.innerHTML = 'Champ invalide, veuillez vérifier votre ville de départ.';
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation de la ville d'arrivée
// function validVilleArr() {
//     let isvalid = true;
//     let inputVilleArr = document.getElementById('ville_arr');

//     let villeArrErrorMsg = document.getElementById('villeArrError');
 
//     if (inputVilleArr.value === "") {
//         villeArrErrorMsg.innerHTML = "Champ invalide, veuillez saisir votre ville d'arrivée.";
//         isvalid = false;
//     }
//     else if (nameRegExp.test(inputVilleArr.value)) {
//         villeArrErrorMsg.innerHTML = '';
//     } else {
//         villeArrErrorMsg.innerHTML = "Champ invalide, veuillez vérifier votre ville d'arrivée.";
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation de l'adresse
// function validAdresse() {
//     let isvalid = true;
//     let inputAdresse = document.getElementById('adresse');

//     let adresseErrorMsg = document.getElementById('adresseError');
 
//     if (inputAdresse.value === "") {
//         adresseErrorMsg.innerHTML = "Champ invalide, veuillez saisir votre adresse.";
//         isvalid = false;
//     }
//     else if (textRegExp.test(inputAdresse.value)) {
//         adresseErrorMsg.innerHTML = '';
//     } else {
//         adresseErrorMsg.innerHTML = "Champ invalide, veuillez vérifier votre adresse.";
//         isvalid = false;
//     }
//     return isvalid;
// }

// // validation du volume
// function validVolume() {
//     let isvalid = true;
//     let inputVolume = document.getElementById('volume');

//     let volumeErrorMsg = document.getElementById('volumeError');
 
//     if (inputVolume.value === "") {
//         volumeErrorMsg.innerHTML = "Champ invalide, veuillez saisir le volume.";
//         isvalid = false;
//     }
//     else if (numberRegExp.test(inputVolume.value)) {
//         volumeErrorMsg.innerHTML = '';
//     } else {
//         volumeErrorMsg.innerHTML = "Champ invalide, veuillez vérifier le volume.";
//         isvalid = false;
//     }
//     return isvalid;
// }

// validationUtils.js

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegExp = /^[a-zA-Z\s]+$/;
const telRegExp = /^\d{10}$/;
const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;
const textRegExp = /^.{1,255}$/;
const numberRegExp = /^\d+$/;
const remarksRegExp = /^.{0,500}$/;

export const validateForm = (data) => {
    const errors = {};

    if (!nameRegExp.test(data.nom)) {
        errors.nom = "Nom invalide";
    }

    if (!nameRegExp.test(data.prenom)) {
        errors.prenom = "Prénom invalide";
    }

    if (!telRegExp.test(data.telephone)) {
        errors.telephone = "Téléphone invalide";
    }

    if (!emailRegExp.test(data.email)) {
        errors.email = "Email invalide";
    }

    if (!dateRegExp.test(data.date_dem)) {
        errors.date_dem = "Date de déménagement invalide";
    }

    if (!nameRegExp.test(data.ville_dep)) {
        errors.ville_dep = "Ville de départ invalide";
    }

    if (!nameRegExp.test(data.ville_arr)) {
        errors.ville_arr = "Ville d'arrivée invalide";
    }

    if (!textRegExp.test(data.adresse)) {
        errors.adresse = "Adresse invalide";
    }

    if (!numberRegExp.test(data.volume)) {
        errors.volume = "Volume invalide";
    }

    if (!remarksRegExp.test(data.remarques)) {
        errors.remarques = "Remarques invalides";
    }

    return errors;
};

export const getInputClassName = (field, formErrors) => {
    return `home__form-input ${formErrors[field] ? 'home__form-input-error' : ''}`;
};
