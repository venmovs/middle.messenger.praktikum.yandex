'use strict';
import { buttonTemplate } from '../../components/button/button.tmpl';
import { inputsTemplate } from '../../components/input/inputs.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Button } from "../../components/button/button";
import { render } from "../../utils/render";

window.addEventListener('DOMContentLoaded', function () {

    const inputValue = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Пароль', name: 'Password', type: 'password'}
    ];

    const loginForm = document.querySelector('#__loginForm');
    makeHtmlFromTemplate(inputsTemplate, inputValue, loginForm);


    const parentButton = document.querySelector('#__loginButton');
    const buttonValue = {
        id: 'loginButton',
        text: 'авторизоваться',
    };

    /*const loginButton = document.querySelector('#__loginButton');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, loginButton);*/



    /*loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        const loginData = new FormData(loginForm);
        for (let [name, value] of loginData) {
            console.log(`${name} : ${value}`);
        }

        window.location.href = '/chat/chat.html';
    });*/


    const loginButton = new Button(buttonValue);
    render('#__loginButton', loginButton);


});