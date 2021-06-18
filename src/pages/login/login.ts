import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Button, IButton } from '../../components/button/button';
import { Input, IInput } from '../../components/input/input';
import { loginTemplate } from './login.tmpl';
import { render } from '../../utils/render';
import { Block } from '../../modules/block/block';
import { LoginValidation } from '../../utils/validation/login-validation';
import { PasswordValidation } from '../../utils/validation/password-validation';
import { FormValidation } from '../../utils/validation/form-validation';

class Login extends Block {

    constructor() {
        const formValidation = new FormValidation();
        const loginValidation = new LoginValidation();
        const passwordValidation = new PasswordValidation();

        const loginInput: IInput = {
            tittle: 'Логин',
            name: 'login',
            type: 'text',
            error: 'мало символов или не английский язык',
            events: {
                focus: (event: Event) => {
                    loginValidation.clear(event);
                },
                blur: (event: Event) => {
                    loginValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const passwordInput: IInput = {
            tittle: 'Пароль',
            name: 'password',
            type: 'password',
            error: 'мало сиволов и должны быть использованы буквы и цифры',
            events: {
                focus: (event: Event) => {
                    passwordValidation.clear(event);
                },
                blur: (event: Event) => {
                    passwordValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const loginButton: IButton = {
            text: 'авторизоваться',
            settings: {withInternalID: true}
        };

        super('fragment', {
            title: 'Вход',
            components: {
                loginInput: new Input(loginInput),
                passwordInput: new Input(passwordInput),
                loginButton: new Button(loginButton),
            },
            events: {
                submit: (event: Event) => {
                    const changeLocation = () => {
                        window.location.href = '/chat/chat.html'
                    };
                    formValidation.check(event, changeLocation);
                },
            },
        });
    };

    render(): string {
        return makeHtmlFromTemplate(loginTemplate, this.props);
    };

}


render('#root', new Login());