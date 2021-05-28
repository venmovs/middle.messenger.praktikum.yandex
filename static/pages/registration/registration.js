'use strict';

window.addEventListener('load', function () {

    let registrationForm = document.getElementById('registrationForm');
    let registrationButton = document.getElementById('registrationButton');

    registrationButton.addEventListener('click', (event) => {
        event.preventDefault();
        let registrationData = new FormData(registrationForm);
        for(let [name, value] of registrationData) {
            console.log(`${name} : ${value}`);
        }
    });

});