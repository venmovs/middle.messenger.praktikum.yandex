'use strict';
import Handlebars from 'handlebars';
import inputsTmpl from './inputs.tmpl';

window.addEventListener('DOMContentLoaded', function () {

    function inputTemplate(){

        let data = [
            {tittle: 'Имя', name: 'Name', type: 'text'},
            {tittle: 'Телефон', name: 'Phone', type: 'tel'},
            {tittle: 'Почта', name: 'Mail', type: 'email'},
            {tittle: 'Пароль', name: 'Password', type: 'password'},
            {tittle: 'Пароль(повторите еще раз)', name: 'PasswordConfirm', type: 'password'}
        ];

        let template = Handlebars.compile(inputsTmpl)({
            data: data
        });

        document.getElementById('output').innerHTML = template;
    }

    inputTemplate();


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