'use strict';
import { errorTemplate } from "./error-message.tmpl";
import { buttonTemplate } from "../../components/button/button.tmpl";
import { makeHtmlFromTemplate } from "../../utils/makeHtml";

window.addEventListener('DOMContentLoaded', function () {

    let notFoundValue = {
        status: '404', message: 'страница не найдена'
    };

    let serverErrorValue = {
        status: '500', message: 'исправляем ошибки'
    };

    let errorContent = document.querySelector('#__errorContent');
    makeHtmlFromTemplate(errorTemplate, notFoundValue, errorContent)


    let buttonValue = {
      id: 'button', text: 'назад к чатам'
    };

    let button = document.querySelector('#__button');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, button);

    button.addEventListener('click', function () {
        window.location = '../chat/chat.html'
    });
});