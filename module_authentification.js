// AFFICHAGE DES FORMULAIRES
const connexionButton = document.querySelectorAll("#connexion-button");
const inscriptionButton = document.querySelectorAll("#inscription-button");



for (const connexionButtonElement of connexionButton) {
    if (connexionButtonElement !== null) {
        connexionButtonElement.addEventListener("click", async () => {
            let textConnection = await fetchHTMLForm("connexion.php");
            const formAuth = document.getElementById("form-auth");
            formAuth.innerHTML = textConnection;
            const formConnection = document.getElementById("form-connection");
            formConnection.addEventListener("submit", async (ev) => {
                ev.preventDefault();
                let request = await fetch("connexion.php", {
                    method: "POST",
                    body: new FormData(formConnection)
                })
                let response = await request.json();
                if (response.response === "ok") {
                    window.location.pathname = 'blog-js/profil.php'
                } else {
                    const login = document.querySelector('#login');
                    const formControl = login.parentElement;
                    const small = formControl.querySelector('small');
                    small.innerText = "La connexion a échoué !"
                    formControl.className = 'form-control error';
                }
            })

            // Errors form gestion
            const formTagConnect = document.getElementById('form-connection');
            const login = document.querySelector('.login-connect');
            const password = document.querySelector('.password-connect');

            formTagConnect.addEventListener('submit', (e) => {
                e.preventDefault();
                checkInputs();
            });

            function checkInputs() {
                //get values from the inputs
                const loginValue = login.value.trim();
                const passwordValue = password.value.trim();

                if(loginValue === '' || loginValue.length < 3){
                    //show error
                    //add error class
                    setErrorFor(login, 'Le login doit faire au moins 3 caractères');
                }else if(loginValue.length >= 3){
                    //add success message
                    //add success class
                    setSuccessFor(login)
                }
                if(passwordValue === '' || passwordValue.length < 3){
                    //show error
                    //add error class
                    setErrorFor(password, 'Le mot de passe doit faire au moins 3 caractères');
                }else if(passwordValue.length >= 3){
                    //add success message
                    //add success class
                    setSuccessFor(password)
                }
            }

            function setErrorFor(input, message){
                const formControl = input.parentElement; // .form-control
                const small = formControl.querySelector('small');

                //add error message inside small tag
                small.innerText = message;

                //add error class
                formControl.className = 'form-control error';

            }

            function setSuccessFor(input, message){
                const formControl = input.parentElement;
                formControl.className = 'form-control success';
            }
        })
    }


    // On lance le clic connexionButton
    connexionButtonElement.click();
}


for (const inscriptionButtonElement of inscriptionButton) {
    if (inscriptionButtonElement !== null) {
        inscriptionButtonElement.addEventListener("click", async () => {
            let textRegister = await fetchHTMLForm('inscription.php');
            const formAuth = document.getElementById("form-auth");
            formAuth.innerHTML = textRegister;
            const formRegister = document.getElementById('form-register');
            formRegister.addEventListener("submit", async (ev) => {
                ev.preventDefault();
                let request = await fetch('inscription.php', {
                    method: 'POST',
                    body: new FormData(formRegister)
                });
                let response = await request.json();
                const messageAuth = document.getElementById("message-auth-form")

                if (response.response === 'not ok'){
                    const login = document.querySelector('#login');
                    const formControl = login.parentElement;
                    const small = formControl.querySelector('small');
                    small.innerText = "Ce login est déjà pris !"
                    formControl.className = 'form-control error';

                } else {
                    messageAuth.style.color = "green";
                    messageAuth.innerHTML = "L\'inscription a bien été effectuée";
                    const connexionButton = document.querySelector("#connexion-button");
                    setTimeout(() => {
                        connexionButton.click()
                    }, 3000);
                    setTimeout(messageAuth.innerHTML = "", 3000);
                }
            })
            // Errors form gestion
            const formTag = document.getElementById('form-register');
            const login = document.querySelector('#login');
            const firstname = document.querySelector('#prenom');
            const lastname = document.querySelector('#nom');
            const password = document.querySelector('#password');

            formTag.addEventListener('submit', (e) => {
                e.preventDefault();
                checkInputs();
            });

            function checkInputs() {
                //get values from the inputs
                const loginValue = login.value.trim();
                const firstnameValue = firstname.value.trim();
                const lastnameValue = lastname.value.trim();
                const passwordValue = password.value.trim();

                if(loginValue === '' || loginValue.length < 3){
                    //show error
                    //add error class
                    setErrorFor(login, 'Le login doit faire au moins 3 caractères');
                }else if(loginValue.length >= 3){
                    //add success message
                    //add success class
                    setSuccessFor(login)
                }
                if(firstnameValue === ''){
                    //show error
                    //add error class
                    setErrorFor(firstname, 'Le prénom doit faire au moins 1 caractères');
                }else{
                    //add success message
                    //add success class
                    setSuccessFor(firstname)
                }

                if(lastnameValue === ''){
                    //show error
                    //add error class
                    setErrorFor(lastname, 'Le nom doit faire au moins 1 caractère');
                }else{
                    //add success message
                    //add success class
                    setSuccessFor(lastname)
                }

                if(passwordValue === '' || passwordValue.length < 3){
                    //show error
                    //add error class
                    setErrorFor(password, 'Le mot de passe doit faire au moins 3 caractères');
                }else if(passwordValue.length >= 3){
                    //add success message
                    //add success class
                    setSuccessFor(password)
                }
            }

            function setErrorFor(input, message){
                const formControl = input.parentElement; // .form-control
                const small = formControl.querySelector('small');

                //add error message inside small tag
                small.innerText = message;

                //add error class
                formControl.className = 'form-control error';
            }
            function setSuccessFor(input, message){
                const formControl = input.parentElement;
                formControl.className = 'form-control success';
            }
        })
    }
}



async function fetchHTMLForm(param) {
    const response = await fetch(param);
    const form =  await response.text();
    return form;
}
