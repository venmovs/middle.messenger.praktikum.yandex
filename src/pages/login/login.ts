import './login.scss';

import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Button, IButton } from '../../components/button/button';
import { Input, IInput } from '../../components/input/input';
import { Link, ILink } from '../../components/link/link';
import { loginTemplate } from './login.tmpl';
import { Block } from '../../modules/block/block';
import { LoginValidation } from '../../utils/validation/login-validation';
import { PasswordValidation } from '../../utils/validation/password-validation';
import { FormValidation } from '../../utils/validation/form-validation';
import { Router } from '../../modules/router/router';
import { WebSocket } from '../../modules/web-socket/web-socket';

/*const webSocket = new WebSocket();
webSocket.init();*/

const router = new Router('#app');

class Login extends Block {
    constructor() {
        const formValidation = new FormValidation();
        const loginValidation = new LoginValidation();
        const passwordValidation = new PasswordValidation();

        const loginInput: IInput = {
            title: 'Логин',
            name: 'login',
            type: 'text',
            error: 'мало символов или не английский язык',
            events: {
                focus: (event: Event) => {
                    loginValidation.clear(event);
                },
                blur: (event: Event) => {
                    loginValidation.check(event);
                },
            },
            settings: { withInternalID: true },
        };

        const passwordInput: IInput = {
            title: 'Пароль',
            name: 'password',
            type: 'password',
            error: 'мало сиволов и должны быть использованы буквы и цифры',
            events: {
                focus: (event: Event) => {
                    passwordValidation.clear(event);
                },
                blur: (event: Event) => {
                    passwordValidation.check(event);
                },
            },
            settings: { withInternalID: true },
        };

        const loginButton: IButton = {
            text: 'авторизоваться',
            settings: { withInternalID: true },
        };

        const loginLink: ILink = {
          text: 'Нет аккаунта?',
          class: 'link',
          events: {
              click: () => {
                  router.go('/registration');
              },
          },
        };

        super('fragment', {
            title: 'Вход',
            components: {
                loginInput: new Input(loginInput),
                passwordInput: new Input(passwordInput),
                loginButton: new Button(loginButton),
                loginLink: new Link(loginLink),
            },
            events: {
                submit: (event: Event) => {
                    const changeLocation = () => {
                        router.go('/chats');
                    };
                    formValidation.check(event, changeLocation);
                },
            },
        });
    }

    render(): string {
        return makeHtmlFromTemplate(loginTemplate, this.props);
    }
}

export { Login };
