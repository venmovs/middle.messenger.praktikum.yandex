'use strict';
import {buttonTemplate} from "../../components/button/button.tmpl";
import {inputsTemplate} from "../../components/input/inputs.tmpl";
import {makeHtmlFromTemplate} from "../../utils/makeHtml";

window.addEventListener('DOMContentLoaded', function () {

    let inputValue = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Пароль', name: 'Password', type: 'password'}
    ];

    let loginForm = document.querySelector('#__loginForm');
    makeHtmlFromTemplate(inputsTemplate, inputValue, loginForm);

    let buttonValue = {
        id: 'loginButton',
        text: 'авторизоваться'
    };

    let loginButton = document.querySelector('#__loginButton');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, loginButton);


    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        let loginData = new FormData(loginForm);
        for (let [name, value] of loginData) {
            console.log(`${name} : ${value}`);
        }

        window.location.href = '/chat/chat.html';
    });

});