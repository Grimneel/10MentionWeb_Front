// ------------- Test lien HTML/JS ------------------- //
/* The `alert('Bonjour !!!!!!!!!!!!')` statement is displaying a pop-up dialog box with the message
"Bonjour !!!!!!!!!!!!". This is a common way to provide a simple message or notification to the user
when a webpage is loaded. */
// alert('Bonjour !!!!!!!!!!!!')



//------------------  Vérification email ------------- //

let form = document.querySelector('#form');
let inputEmail = document.getElementById('email');
let sujet = document.querySelector('#subject');
let messageTextArea = document.querySelector('#message');
let myAlert = document.querySelector('#alert');
let emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
let sujetRegExp = /^[a-z]{2,20}$/;
let messageRegExp =/^[a-zA-Z0-9.-_-@]{20,200}$/;
let inputs = document.querySelectorAll('input');
let message = "";
function setValidation(element, infos = null) {

    let formControl = element.parentElement;

    let small = formControl.querySelector('small');
    if (infos != null) {
        small.innerText = infos;
        formControl.className = "form-control error";
    } else {
        formControl.className = "form-control success";
    }
}
    form.addEventListener('submit', (event) => {
                event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de seproduire.
        
                let emailValue = email.value.trim();
                let sujetValue = sujet.value.trim();
                let messageValue = messageTextArea.value.trim();
                let formArray = [emailValue, sujetValue, messageValue];


                if (formArray.includes("")) {
        
                    myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3" role="alert">Veuillez renseigner tout les champs</p>';       
        
                    for (let input of inputs) {
                          setValidation(input, message);
                       }
        
                } else {
                
                    if (!emailRegExp.test(emailValue)) {
                        message = 'Email n\est pas valide';
                        setValidation(email, message);
                    } else {
                        setValidation(email); 
                    }

                    if (!sujetRegExp.test(sujetValue)) {
                            
                     message = 'Sujet n\'est pas valide';
                     setValidation(sujet, message);
                            
                    } else {
                    setValidation(sujet);
                            }
                    if (!messageRegExp.test(messageValue)) {
                            
                        message = 'Sujet n\'est pas valide';
                        setValidation(messageTextArea, message);
                                       
                    } else {
                               setValidation(messageTextArea);
                                       }      
                   
                }
                if(myAlert.innerHTML == "" && message == "")
                    {
                        myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3" role="alert"><a  href="#">Connected</a></p>';
                    }  
        })
    

        
// form.addEventListener('submit', function(formError){

//     let emailRegExp = new RegExp('^[a-zA-Z-0-9.-_]+[@]{1}[a-zA-Z-0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

//     if (inputEmail.ariaValueMax.trim() == ""){
//         let myError = document.getElementById('error')
//         myError.innerHTML= "Le champs email est requis";
//         myError.style.color = 'red';
//         formError.preventDefault();
//     } else if (emailRegExp.test(inputEmail.value) == false){
//         let myError = document.getElementById('error')
//         myError.innerHTML= "L'email doit comporter un @";
//         myError.style.color = 'red';
//         formError.preventDefault();
//     }
// })



// 










