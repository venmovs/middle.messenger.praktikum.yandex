'use strict'

window.addEventListener('load', function () {

    let registrationForm = document.getElementById('registrationForm');
    let registrationButton = document.getElementById('registrationButton');

    registrationButton.addEventListener('click', (event) => {
        event.preventDefault();
        for (let label of registrationForm.firstElementChild.children) {
            let input = label.querySelector('input');
            console.log(input.value);
        }
    });

});