// ------------------ Dark Mode ----------------//

let switchBox = document.querySelector('.switch');
// Je stock l'élément div.switch

let container = document.querySelector('.container-fluid'); // je stock l'élément div.container

switchBox.addEventListener('click', changeMode); // je déclare l'élément click sur la div.switch

let nav = document.querySelector('.navbar-desktop');
let liens = document.querySelectorAll('.navbar-desktop a');
let btnChange = document.querySelector ('.btn');
let icon = document.querySelector('.switch i');
let titre = document.querySelector('h1');

function changeMode() {
    // La div container change de couleur de fond et de text
    container.classList.toggle('container-change');
    nav.classList.toggle('nav-dark');

    for (let lien of liens) {
        lien.classList.toggle('lienDarkMode');
    }

    btnChange.classList.toggle('btn-change');
    icon.classList.toggle('icone-change');

    if (icon.classList.contains("bi-sun-fill")) {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    }

    switchBox.classList.toggle('switch-change');
    titre.classList.toggle('colorTitre');
}

// ---------------------------------- Partie video ---------------------------------- //
        // -------------------------- Icon smile -------------------------- //



// 1ère façon de faire
let iconeSmile = document.querySelector('.bi-emoji-neutral');

if (iconeSmile.classList.contains('bi-emoji-neutral')) {
    iconeSmile.classList.remove('bi-emoji-neutral');
    iconeSmile.classList.add('bi-emoji-heart-eyes-fill');
} else {
    iconeSmile.classList.remove('bi-emoji-heart-eyes-fill');
    iconeSmile.classList.add('bi-emoji-neutral');
}


// 2ème façon de faire
// let emoji = document.querySelector('.bloc-btn i')
// emoji.addEventListener('click', ()=> {
//     emoji.classList.toggle('bi-emoji-wink');
// });


        // -------------------------- Bouton abonnez-vous -------------------------- //


// let btnAbonner = document.querySelector('.btn-abonner');
// btnAbonner.addEventListener('click', );
// btnAbonner.innerText = 'Abonner ✓';

// 1ère façon de faire
// let btnAbonner = document.querySelector('.btn-abonner')
// btnAbonner.addEventListener('click', ()=> {
// btnAbonner.classList.toggle(btnAbonner.innerText = 'Abonner ✓');
// });


// 2ème façon de faire
let btnAbonne = document.querySelector('.btn-abonner');

btnAbonne.addEventListener('click', ()=> {

    if( btnAbonne.innerText === 'Abonnez-vous') {

        btnAbonne.innerHTML = 'Abonné <i class="bi bi-check"></i>';

    } else {

        btnAbonne.innerText = 'Abonnez-vous';
    }
});

// -------------------------- Cookies -------------------------- //

let btnCookies = document.querySelector('.btn-success');

let cookies = document.querySelector('.cookies');

btnCookies.addEventListener("click", ()=> {

    // cookies.style.opacity = "0";
    cookies.style.bottom = "auto";


})

// -------------------------- Carrousel -------------------------- //

let left = document.querySelector('.left');
let automatic = document.querySelector('.automatic');
let right = document.querySelector('.right')
let img = document.querySelector('img');
let automaticIcon = document.querySelector('.automatic i');

let i = 1;


right.addEventListener('click', carrousel);
    
    function carrousel(){

    i++; // on incrémente puis on affecte : la valeur de la variable sera donc 1 / puis 2 / puis 3 / etc.
    img.setAttribute('src', `assets/img/${i}.jpg`);
    
    if (i == 7) {
        i = 1;
        img.setAttribute('src', `assets/img/${i}.jpg`);
        // j'appelle de façon automatique les images par leur nom
    }

};

left.addEventListener('click', ()=> {
    
    i--;
    img.setAttribute('src', `assets/img/${i}.jpg`);
    
    if (i == 0) {
         i= 6;
        img.setAttribute('src', `assets/img/${i}.jpg`);
    }

})

let statut = null; // Initialisation d'une variale pour stocker l'état du slider (lecture ou pause)
automatic.addEventListener('click', ()=> {
    // Inversion de la classe 'bi-pause-fill' sur l'élément automaticIcon à chaque clic
    automaticIcon.classList.toggle('bi-pause-fill');

    // Vérification de l'état actuel du slider
    if (statut == null) {
        // Si le slider est en pause
        // Activation du mode lecture : exécution de la fonction carrousel toutes les 1500 millisecondes (1.5 secondes)

        statut = window.setInterval(carrousel, 1500); //setInterval est utilisé pour exécuter une fonction à intervalles réguliers

    } else {
        // Si le slider est en lecture
        // Désactivation du mode lecture : arrêt de l'exécution de la fonction carrousel à intervalles réguliers
        window.clearInterval(statut);

        //clearInterval est utilisé pour arrêter l'exécution de cette fonction à intervalles réguliers en utilisant l'identifiant de l'intervalle retourné par setInterval.
        
        statut = null; // Réinitialisation de la variable statut à null pour indiquer que le slider est en pause

    }
})



// -------------------------- Loader -------------------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideLoader');
})