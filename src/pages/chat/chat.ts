import avatar from '../../../static/images/avatar/test-avatar.jpg';
import { Block } from "../../modules/block/block";
import {render} from "../../utils/render";
import {IUsers, Users} from "./users/users";
import {makeHtmlFromTemplate} from "../../utils/makeHtml";
import {chatTemplate} from "./chat.tmpl";
import {IMessage, Message} from "./message/message";

/*
window.addEventListener('DOMContentLoaded', function (){

    const userValue = [
        {name: 'Катя', img: avatar, message: 'привет как дела?', time: '10:20', count: '2'},
        {name: 'Женя Красава', message: 'привет', time: '12:23', count: '4'},
        {name: 'Дудь', img: avatar, message: 'яндекс практикум', time: '10:22', count: '1'},
        {name: 'Познер', message: 'прекол', time: '05:22'},
        {name: 'Алсу', message: 'тадам', time: '11:11', count: '1'},
    ];

    const chatUsers = document.querySelector('#__users');
    // makeHtmlFromTemplate(userTemplate ,userValue, chatUsers);

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
    // makeHtmlFromTemplate(messageTemplate, messageValue, messageWrapper);


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

});*/


class Chat extends Block{

    constructor() {

        const createUsers = (): Users[] => {

            const userValue: IUsers[] = [
                {name: 'Катя', img: avatar, message: 'привет как дела?', time: '10:20', count: 2},
                {name: 'Женя Красава', message: 'привет', time: '12:23', count: 4},
                {name: 'Дудь', img: avatar, message: 'яндекс практикум', time: '10:22', count: 1},
                {name: 'Познер', message: 'прекол', time: '05:22'},
                {name: 'Алсу', message: 'тадам', time: '11:11', count: 1},
            ];

            return userValue.map((user) => {
                return new Users(user);
            });

        };

        const createMessages = (): Message[] => {

            const messageValue: IMessage[] = [
                {mine: true, text: 'Ну чо?', time: '10:30'},
                {mine: true, text: 'Ни чо', time: '10:31'},
                {mine: false, text: 'Ну чо?', time: '10:32'},
                {mine: true, text: 'ННи чо', time: '10:33'},
                {mine: false, text: 'Ну чо?', time: '10:34'},
                {mine: false, text: 'Ни чо', time: '10:35'},
                {mine: true, text: 'Ну чо?', time: '10:36'},
            ];

            return messageValue.map((message) => {
                return new Message(message);
            })

        };

        super('fragment', {
            components: {
                users: createUsers(),
                message: createMessages(),
            }
        });
    }

    render(): string {
        return makeHtmlFromTemplate(chatTemplate, this.props);
    };

}


render('#root', new Chat());