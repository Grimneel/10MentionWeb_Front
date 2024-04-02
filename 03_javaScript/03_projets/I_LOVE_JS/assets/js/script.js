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



let emoji = document.querySelector('.bloc-btn i')
emoji.addEventListener('click', ()=> {
    emoji.classList.toggle('bi-emoji-wink');
});


let btnAbonner = document.querySelector('.btn-abonner');
btnAbonner.addEventListener('click', )
btnAbonner.innerText = 'Abonner ✓'