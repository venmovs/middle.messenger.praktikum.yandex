'use strict';
import { userTmpl } from "./users.tmpl";
import { messageTmpl } from "./message.tmpl";
import { makeHtmlFromTemplate } from "../../utils/makeHtml";
import avatar from '../../../static/images/avatar/test-avatar.jpg'

window.addEventListener('DOMContentLoaded', function (){

    let userValue = [
        {name: 'Катя', img: avatar, message: 'привет как дела?', time: '10:20', count: '2'},
        {name: 'Женя Красава', message: 'привет', time: '12:23', count: '4'},
        {name: 'Дудь', img: avatar, message: 'яндекс практикум', time: '10:22', count: '1'},
        {name: 'Познер', message: 'прекол', time: '05:22'},
        {name: 'Алсу', message: 'тадам', time: '11:11', count: '1'},
    ];

    let chatUsers = document.querySelector('#__users');
    makeHtmlFromTemplate(userTmpl ,userValue, chatUsers);

    let messageValue = [
        {mine: true, text: 'Ну чо?', time: '10:30'},
        {mine: true, text: 'Ни чо', time: '10:31'},
        {mine: false, text: 'Ну чо?', time: '10:32'},
        {mine: true, text: 'ННи чо', time: '10:33'},
        {mine: false, text: 'Ну чо?', time: '10:34'},
        {mine: false, text: 'Ни чо', time: '10:35'},
        {mine: true, text: 'Ну чо?', time: '10:36'},
    ];

    let messageWrapper = document.querySelector('#__message-wrapper');
    makeHtmlFromTemplate(messageTmpl, messageValue, messageWrapper);


    const handleFiles = function() {
        const fileList = this.files;
        console.log(fileList);
    };

    let addFileBtn = document.querySelector('#addFileBtn');
    addFileBtn.addEventListener('change', handleFiles, false);

    let search = document.querySelector('#search');
    search.addEventListener('change', function (event) {

        for (let user of chatUsers.children){
            let userTagName = user.getAttribute('data-tag-name');
            let res = userTagName.match(event.target.value) || [];

            if (res.length === 0) {
                user.style.display = 'none';
            } else {
                user.style.display = 'grid';
            }
        }
    });


    let editor = document.querySelector('#editor');
    editor.addEventListener('click', function () {
        window.location = '../profile/profile.html';
    });

    let sendButton = document.querySelector('#sendButton');
    let messageForm = document.querySelector('#message-form');
    sendButton.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`message: ${messageForm.message.value}`);
    });

});