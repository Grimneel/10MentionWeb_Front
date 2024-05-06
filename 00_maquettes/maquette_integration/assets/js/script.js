// ------------- Test lien HTML/JS ------------------- //
/* The `alert('Bonjour !!!!!!!!!!!!')` statement is displaying a pop-up dialog box with the message
"Bonjour !!!!!!!!!!!!". This is a common way to provide a simple message or notification to the user
when a webpage is loaded. */
// alert('Bonjour !!!!!!!!!!!!')



//------------------  Vérification email ------------- //

let form = document.querySelector('#form');
let email = document.querySelector('#email');
let sujet = document.querySelector('#subject')
let myAlert = document.querySelector('#alert');


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

        event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.

        let emailValue = email.value.trim();
        if (emailValue.includes("")) {

            myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3 d-flex flex-column justify-content-center " role="alert">Veuillez renseigner tout les champs</p>';       
            
            for (let input of inputs) {
                  setValidation(input, message);
               }

        } else {
            myAlert.innerHTML = '';

            let regexEmail = /^(?=.*[a-zA-Z0-9]).{20,200}$/;

                    if (!regexEmail.test(emailValue)) {

                        message = 'Email n\est pas valide';
                        setValidation(email, message);
                    
                    } else {
                        setValidation(email);
                    }
        }

        let sujetValue = sujet.value.trim();
        if (sujetValue.includes("")) {

            myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3" role="alert">Veuillez renseigner tout les champs</p>';       

            for (let input of inputs) {
                  setValidation(input, message);
               }

        } else {
            myAlert.innerHTML = '';

            let regexSujet = /^(?=.*[a-zA-Z0-9]).{20,200}$/;

                    if (!regexSujet.test(sujetValue)) {
                    
                        message = 'Sujet n\est pas valide';
                        setValidation(sujet, message);
                    
                    } else {
                        setValidation(sujet);
                    }
        }
})

setValidation(element, infos);








