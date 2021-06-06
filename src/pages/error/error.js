'use strict';
import { errorTemplate } from './error-message.tmpl';
import { buttonTemplate } from '../../components/button/button.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

window.addEventListener('DOMContentLoaded', function () {

    const notFoundValue = {
        status: '404', message: 'страница не найдена'
    };

    const serverErrorValue = {
        status: '500', message: 'исправляем ошибки'
    };

    const errorContent = document.querySelector('#__errorContent');
    makeHtmlFromTemplate(errorTemplate, notFoundValue, errorContent)


    const buttonValue = {
        id: 'button', text: 'назад к чатам'
    };

    const button = document.querySelector('#__button');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, button);

    button.addEventListener('click', function () {
        window.location = '../chat/chat.html'
    });
});