'use strict';
import { infoTemplate } from "./info.tmpl";
import { inputsTemplate } from "../../components/input/inputs.tmpl";
import { buttonTemplate } from "../../components/button/button.tmpl";
import { makeHtmlFromTemplate } from "../../utils/makeHtml";

window.addEventListener('DOMContentLoaded', function () {

    let infoValue = [
        {key: 'Логин', value: 'venmovs'},
        {key: 'Телефон', value: '+7(999)922-33-75'},
        {key: 'Имя', value: 'Виген'},
        {key: 'Почта', value: 'vigen94@icloud.com'},
        {key: 'Фамилия', value: 'Мовсисян'},
    ];
    let inputsValue = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Имя', name: 'Name', type: 'text'},
        {tittle: 'Почта', name: 'Mail', type: 'email'},
        {tittle: 'Пароль', name: 'Password', type: 'password'},
        {tittle: 'Фамилия', name: 'Surname', type: 'text'},
        {tittle: 'Телефон', name: 'Phone', type: 'tel'},
        {tittle: 'Пароль (еще раз)', name: 'PasswordConfirm', type: 'password'}
    ];

    let info = document.querySelector('#__info');
    makeHtmlFromTemplate(infoTemplate, infoValue, info);

    let editButtonValue = {
        id: 'editButton', text: 'редактировать'
    };
    let saveButtonValue = {
      id: 'saveButton', text: 'сохранить'
    };

    let button = document.querySelector('#__button');
    makeHtmlFromTemplate(buttonTemplate, editButtonValue, button);
    makeHtmlFromTemplate(buttonTemplate, saveButtonValue, button);

    let saveButton = document.querySelector('#saveButton');
    saveButton.style.display = 'none';

    let editButton = document.querySelector('#editButton');
    editButton.addEventListener('click', function (event) {
        event.preventDefault();

        while (info.firstChild){
            info.firstChild.remove();
        }

        saveButton.style.display = 'block';
        editButton.style.display = 'none';

        makeHtmlFromTemplate(inputsTemplate, inputsValue, info);
    });

    saveButton.addEventListener('click', function (event) {
        let profileInfo = new FormData(info);

        for (let [name, value] of profileInfo) {
            console.log(`${name} : ${value}`);
        }
    });


    let backButton = document.querySelector('#back');
    backButton.addEventListener('click', function () {
        window.history.back();
    });


});