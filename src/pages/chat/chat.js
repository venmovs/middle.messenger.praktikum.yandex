'use strict';
import { userTemplate } from './users.tmpl';
import { messageTemplate } from './message.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import avatar from '../../../static/images/avatar/test-avatar.jpg';

window.addEventListener('DOMContentLoaded', function (){

    const userValue = [
        {name: 'Катя', img: avatar, message: 'привет как дела?', time: '10:20', count: '2'},
        {name: 'Женя Красава', message: 'привет', time: '12:23', count: '4'},
        {name: 'Дудь', img: avatar, message: 'яндекс практикум', time: '10:22', count: '1'},
        {name: 'Познер', message: 'прекол', time: '05:22'},
        {name: 'Алсу', message: 'тадам', time: '11:11', count: '1'},
    ];

    const chatUsers = document.querySelector('#__users');
    makeHtmlFromTemplate(userTemplate ,userValue, chatUsers);

    const messageValue = [
        {mine: true, text: 'Ну чо?', time: '10:30'},
        {mine: true, text: 'Ни чо', time: '10:31'},
        {mine: false, text: 'Ну чо?', time: '10:32'},
        {mine: true, text: 'ННи чо', time: '10:33'},
        {mine: false, text: 'Ну чо?', time: '10:34'},
        {mine: false, text: 'Ни чо', time: '10:35'},
        {mine: true, text: 'Ну чо?', time: '10:36'},
    ];

    const messageWrapper = document.querySelector('#__message-wrapper');
    makeHtmlFromTemplate(messageTemplate, messageValue, messageWrapper);


    const handleFiles = function() {
        const fileList = this.files;
        console.log(fileList);
    };

    const addFileBtn = document.querySelector('#addFileBtn');
    addFileBtn.addEventListener('change', handleFiles, false);

    const search = document.querySelector('#search');
    search.addEventListener('change', function (event) {

        for (let user of chatUsers.children){
            const userTagName = user.getAttribute('data-tag-name');
            const res = userTagName.match(event.target.value) || [];

            if (res.length === 0) {
                user.classList.add('hidden');
            } else {
                user.classList.remove('hidden');
            }
        }
    });


    const editor = document.querySelector('#editor');
    editor.addEventListener('click', function () {
        window.location = '../profile/profile.html';
    });

    const sendButton = document.querySelector('#sendButton');
    const messageForm = document.querySelector('#message-form');
    sendButton.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`message: ${messageForm.message.value}`);
    });

});