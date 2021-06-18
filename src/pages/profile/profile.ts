import {infoTemplate} from './info.tmpl';
import {inputsTemplate} from '../../components/input/inputs.tmpl';
import {buttonTemplate} from '../../components/button/button.tmpl';
import {makeHtmlFromTemplate} from '../../utils/makeHtml';
import {Block} from "../../modules/block/block";
import {profileTemplate} from "./profile.tmpl";
import {render} from "../../utils/render";
import {ButtonImage, IButtonImage} from "../../components/button-image/button-image";

/*
window.addEventListener('DOMContentLoaded', function () {

    const infoValue = [
        {key: 'Логин', value: 'venmovs'},
        {key: 'Телефон', value: '+7(999)922-33-75'},
        {key: 'Имя', value: 'Виген'},
        {key: 'Почта', value: 'vigen94@icloud.com'},
        {key: 'Фамилия', value: 'Мовсисян'},
    ];
    const inputsValue = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Имя', name: 'Name', type: 'text'},
        {tittle: 'Почта', name: 'Mail', type: 'email'},
        {tittle: 'Пароль', name: 'Password', type: 'password'},
        {tittle: 'Фамилия', name: 'Surname', type: 'text'},
        {tittle: 'Телефон', name: 'Phone', type: 'tel'},
        {tittle: 'Пароль (еще раз)', name: 'PasswordConfirm', type: 'password'}
    ];

    const info = document.querySelector('#__info');
    makeHtmlFromTemplate(infoTemplate, infoValue, info);

    const editButtonValue = {
        id: 'editButton', text: 'редактировать'
    };
    const saveButtonValue = {
        id: 'saveButton', text: 'сохранить'
    };

    const button = document.querySelector('#__button');
    makeHtmlFromTemplate(buttonTemplate, editButtonValue, button);
    makeHtmlFromTemplate(buttonTemplate, saveButtonValue, button);

    const saveButton = document.querySelector('#saveButton');
    saveButton.classList.add('hidden');

    const editButton = document.querySelector('#editButton');
    editButton.addEventListener('click', function (event) {
        event.preventDefault();

        while (info.firstChild) {
            info.firstChild.remove();
        }

        saveButton.classList.remove('hidden');
        editButton.classList.add('hidden');

        makeHtmlFromTemplate(inputsTemplate, inputsValue, info);
    });

    saveButton.addEventListener('click', function (event) {
        const profileInfo = new FormData(info);

        for (let [name, value] of profileInfo) {
            console.log(`${name} : ${value}`);
        }
    });


    const backButton = document.querySelector('#back');
    backButton.addEventListener('click', function () {
        window.history.back();
    });

});*/

class Profile extends Block {

    constructor() {

        const backIcon = require('../../../static/images/icons/back.svg');

        const buttonImageBack: IButtonImage = {
            name: 'back',
            image: backIcon,
            events: {
                click: () => {
                    window.location.href = '/chat/chat.html';
                }
            }
        };

        super('fragment', {
            components: {
                buttonImageBack: new ButtonImage(buttonImageBack),
            }
        });

    }

    render(): string {
        return makeHtmlFromTemplate(profileTemplate, this.props);
    }
}

render('#root', new Profile());
