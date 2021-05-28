'use strict';

window.addEventListener('load', function () {

    let loginForm = document.getElementById('loginForm');
    let loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        let loginData = new FormData(loginForm);
        for(let [name, value] of loginData) {
            console.log(`${name} : ${value}`);
        }

        window.location.href = '/chat/chat.html';
    });

});