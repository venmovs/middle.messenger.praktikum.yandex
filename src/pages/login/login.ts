import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { loginTemplate } from './login.tmpl';
import { render } from '../../utils/render';
import { Block } from '../../modules/block/block';

/*window.addEventListener('DOMContentLoaded', function () {
    const inputValue = [
        {tittle: 'Логин', name: 'Login', type: 'text'},
        {tittle: 'Пароль', name: 'Password', type: 'password'}
    ];

    const loginForm = document.querySelector('#__loginForm');
    makeHtmlFromTemplate(inputsTemplate, inputValue, loginForm);

    const parentButton = document.querySelector('#__loginButton');
    const buttonValue = {
        text: 'авторизоваться',
        events: {
            click: event => {
                console.log(event.target);
            }
        },
        settings: {withInternalID: true}
    };

    /!*const loginButton = document.querySelector('#__loginButton');
    makeHtmlFromTemplate(buttonTemplate, buttonValue, loginButton);*!/

    /!*loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        const loginData = new FormData(loginForm);
        for (let [name, value] of loginData) {
            console.log(`${name} : ${value}`);
        }

        window.location.href = '/chat/chat.html';
    });*!/

    const loginButton = new Button(buttonValue);
    render('#__loginButton', loginButton);

});*/


class Login extends Block {

    constructor() {

        const buttonProps = {
            text: 'авторизоваться',
            events: {
                click: (event: Event) => {
                    console.log(event);
                }
            },
            settings: {withInternalID: true}
        };

        const loginInputProps = {
            tittle: 'Логин',
            name: 'Login',
            type: 'text',
            settings: {withInternalID: true}
        };

        const passwordInputProps = {
            tittle: 'Пароль',
            name: 'Password',
            type: 'password',
            settings: {withInternalID: true}
        };


        super('fragment', {
            title: 'Вход',
            events: {
                click: (event: Event) => {
                    console.log(event);
                }
            },
            loginInput: new Input(loginInputProps).render(),
            passwordInput: new Input(passwordInputProps).render(),
            loginButton: new Button(buttonProps).render(),
        });
    };


    render(): string {
        return makeHtmlFromTemplate(loginTemplate, this.props);
    };

}


render('#root', new Login());