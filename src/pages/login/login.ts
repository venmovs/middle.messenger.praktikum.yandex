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

        super('fragment', {
            title: 'Вход',
            components: {
                loginInput: new Input(this.getLoginInputProps()),
                passwordInput: new Input(this.getPasswordInputProps()),
                loginButton: new Button(this.getButtonProps()),
            },
            events: {
                submit: (event: Event) => {
                    const changeLocation = () => {
                        window.location.href = '/chat/chat.html'
                    }
                    formValidation.check(event, changeLocation);
                },
            },
        });
    };

    private getLoginInputProps(): IInput {

        const loginValidation = new LoginValidation();

        return {
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
        }
    };

    private getPasswordInputProps(): IInput {

        const passwordValidation = new PasswordValidation();

        return {
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
    }

    private getButtonProps(): IButton {

        return {
            text: 'авторизоваться',
            settings: {withInternalID: true}
        };
    }

    render(): string {
        return makeHtmlFromTemplate(loginTemplate, this.props);
    };

}


render('#root', new Login());