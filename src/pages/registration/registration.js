'use strict';
import { inputsTemplate } from '../../components/input/inputs.tmpl';
import { buttonTemplate } from '../../components/button/button.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

window.addEventListener('DOMContentLoaded', function () {

    const inputsValues = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Имя', name: 'Name', type: 'text'},
        {tittle: 'Почта', name: 'Mail', type: 'email'},
        {tittle: 'Пароль', name: 'Password', type: 'password'},
        {tittle: 'Фамилия', name: 'Surname', type: 'text'},
        {tittle: 'Телефон', name: 'Phone', type: 'tel'},
        {tittle: 'Пароль (еще раз)', name: 'PasswordConfirm', type: 'password'}
    ];

    const registrationForm = document.querySelector('#__registration-forms');

    makeHtmlFromTemplate(inputsTemplate, inputsValues, registrationForm);

    const buttonValue = {
        id: 'registrationButton',
        text: 'зарегестрироваться'
    };

    const registrationButton = document.querySelector('#__registration-button');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, registrationButton);


    registrationButton.addEventListener('click', (event) => {
        event.preventDefault();

        const registrationData = new FormData(registrationForm);

        for (let [name, value] of registrationData) {
            console.log(`${name} : ${value}`);
        }

    });

});
