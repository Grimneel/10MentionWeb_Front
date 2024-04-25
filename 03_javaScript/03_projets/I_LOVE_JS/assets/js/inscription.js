// -------------------------- Loader -------------------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideLoader');
})

// -------------------------- Formulaire -------------------------- //

// Click et affiche les informations sur le mot de passe
let informations = document.querySelector('.mdp p')
let interrogation = document.querySelector('.fa-question')

interrogation.addEventListener('click', ()=>{
        informations.classList.toggle('showP');
});

// Affichage du mot de passe

let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password')

afficheMdp.addEventListener('click', ()=>{

    switch (password.type) {
        case "password":
                // password.setAttribute('type', 'text');
                password.type = "text";
                afficheMdp.classList.replace('fa-eye-slash', 'fa-eye');
            break;
            default:
                // password.setAttribute('type', 'password');
                password.type = "password";
                afficheMdp.classList.replace('fa-eye', 'fa-eye-slash');

            break;
    
    }
})

// Validation du formulaire
let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let message = "";


form.addEventListener('submit', (event)=>{

    event.preventDefault(); // Une méthode utilisée dans les événments JavaScript pour empêcher le comportement par defaut associé à un évévenement de se produire.
    formVerif();
})

function formVerif() {
    // trim() en JS est utilisé pour supprimer les espaces blancs au début et à la fin d'une chaîne de caractères.
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    // Username verify
    if (usernameValue == "") { // Je vérifie si le champ username est vide
        // Si c'est le cas je définie un message d'erreur approprié
        message = 'Username ne doit pas être vide';
        setError(username, message);
    }

    // Email verify
    if (emailValue == "") { // Je vérifie si le champ username est vide
        // Si c'est le cas je définie un message d'erreur approprié
        message = 'Email ne doit pas être vide';
        setError(email, message);
    }

    // Password verify
    if (passwordValue == "") { // Je vérifie si le champ username est vide
        // Si c'est le cas je définie un message d'erreur approprié
        message = 'Le mot de passe ne peut pas être vide';
        setError(password, message);
    }

    // Password2 verify
    if (password2Value == "") { // Je vérifie si le champ username est vide
        // Si c'est le cas je définie un message d'erreur approprié
        message = 'La confirmation du mot de passe ne doit pas être vide';
        setError(password2, message);
    }
}


function setError (element, infos){
    let formControl = element.parentElement; // Je stock le parent de l'élément qui contient l'erreur (la div avec la classe form-control)
    let small = formControl.querySelector('small');
    // Ajout du message d'erreur 
    small.innerText = infos;
    
}
setError();
