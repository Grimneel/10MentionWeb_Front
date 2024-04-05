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
