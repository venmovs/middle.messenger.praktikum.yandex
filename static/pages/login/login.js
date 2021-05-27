'use strict'

window.addEventListener('load', function () {

    let loginForm = document.getElementById('loginForm');
    let loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(loginForm.loginName.value);
        console.log(loginForm.loginPassword.value);
    });

});