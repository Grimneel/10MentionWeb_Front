// -------------------------- Loader -------------------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideLoader');
})


// -------------------------- Keyboard -------------------------- //

let mario = document.getElementById('mario');

document.addEventListener('keydown', clavier);
function clavier(event){

//     /* L'objet event en JavaScript est un objet qui représente un événement déclenché dans le navigateur
//      Lorsqu'une action se produit sur une page web (comme un clic de souris, un appui sur une touche du clavier, etc.), un objet event est créé pour encapsuler toutes les informations liées à cet événement. 
//      Cet objet event contient diverses propriétés et méthodes qui fournissent des détails sur l'événement qui s'est produit. Voici quelques-unes des propriétés les plus couramment utilisées :
    
//         - type: Indique le type d'événement déclenché (par exemple, "click", "keydown", "mousemove", etc.).
//         - target: Référence à l'élément DOM sur lequel l'événement s'est produit.
//         - keyCode (ou key): Code de la touche du clavier qui a été pressée lors d'un événement keydown.
//         - clientX et clientY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la fenêtre du navigateur.
//         - pageX et pageY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la page web. 
//     */

//     console.log(event);
//     console.log(mario.offsetTop);

//     // La propriété offsetTop renvoie la position du haut (en pixels) par rapport au haut de l'élément offsetParent. L' élément offsetParent est l'ancêtre le plus proche qui a une position autre que statique
//     //  La propriété offsetLeft renvoie la position gauche (en pixels) par rapport au côté gauche de l'élément offsetParent
//     console.log(mario.offsetLeft);

//         if (event.key == "ArrowDown") {

//             mario.style.top = mario.offsetTop + 10 + "px";

//         } else if (event.key == "ArrowUp") {

//             mario.style.top = mario.offsetTop - 10 + "px";

//         } else if (event.key == "ArrowLeft") {

//              mario.style.left = mario.offsetLeft - 10 + "px";

//         } else if (event.key == "ArrowRight") {

//              mario.style.left = mario.offsetLeft + 10 + "px";

//         } if (event.key == "z") { // en haut à gauche

//             mario.style.top = mario.offsetTop - 10 + "px";
//             mario.style.left = mario.offsetLeft - 10 + "px";
//             mario.style.rotate = "40deg";
//             mario.style.transform = "scaleX(-1)";

//         } else if (event.key == "s") {

//             mario.style.top = mario.offsetTop - 10 + "px";
//             mario.style.left = mario.offsetLeft + 10 + "px";
//             mario.style.rotate = "-40deg";
//             mario.style.transform = "scaleX(1)";

//         } else if (event.key == "q") {
            
//             mario.style.top = mario.offsetTop + 10 + "px";
//             mario.style.left = mario.offsetLeft - 10 + "px";
//             mario.style.rotate = "-40deg";
//             mario.style.transform = "scaleX(-1)";

//         } else if (event.key == "d") {

//             mario.style.top = mario.offsetTop + 10 + "px";
//             mario.style.left = mario.offsetLeft + 10 + "px";
//             mario.style.rotate = "40deg";
//             mario.style.transform = "scaleX(1)";

//         }

//     }

    // -------------------------- avec switch -------------------------- //
    
    switch(event.code){

        case 'ArrowUp' :
            mario.style.top =  (mario.offsetTop - 10) + "px";

        break;

        case 'ArrowRight' :
            mario.style.left = (mario.offsetLeft + 10 ) + "px";
            mario.style.transform = "scaleX(1)";
        break;

        case 'ArrowDown' :
            mario.style.top = (mario.offsetTop + 10 ) + "px";
        break;

        case 'ArrowLeft' :
            mario.style.left = (mario.offsetLeft - 10 ) + "px";
            mario.style.transform = "scaleX(-1)";

        break;
        case "KeyW" :
              mario.style.left = mario.offsetLeft - 10 + "px";
              mario.style.top = mario.offsetTop - 10 + "px";
              mario.style.rotate= "40deg";
              mario.style.transform = "scaleX(-1)";

       break;
       case "KeyS" :
              mario.style.top = mario.offsetTop - 10 + "px";
              mario.style.left = mario.offsetLeft + 10 + "px";
              mario.style.rotate= "-40deg";
              mario.style.transform = "scaleX(1)";

       break;
       case "KeyA" :
         
              mario.style.top = mario.offsetTop + 10 + "px";
              mario.style.left = mario.offsetLeft - 10 + "px";
              mario.style.rotate= "-40deg";
              mario.style.transform = "scaleX(-1)";

       break;
       case "KeyD" :
              mario.style.left = mario.offsetLeft + 10 + "px";
              mario.style.top = mario.offsetTop + 10 + "px";
              mario.style.rotate= "40deg";
              mario.style.transform = "scaleX(1)";

       break;
       

    }
}
    
    
    
    //------------------------ if avec keyCode-----------------------------------
    // if(event.keyCode == 38){

    //     mario.style.top = mario.offsetTop - 10 + 'px';


    // }else if(event.keyCode == 39){

    //     mario.style.left = mario.offsetLeft + 10 + 'px';

    // }else if(event.keyCode == 40){

    //     mario.style.top = mario.offsetTop + 10 + 'px';

    // }else if(event.keyCode == 37){

    //     mario.style.left = mario.offsetLeft - 10 + 'px';

    // }
    
    
    
    var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.code] = true;
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
            case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.code] = false;
    },
false);