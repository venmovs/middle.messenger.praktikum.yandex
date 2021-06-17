import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { loginTemplate } from './login.tmpl';
import { render } from '../../utils/render';
import { Block } from '../../modules/block/block';
import { LoginValidation } from '../../utils/validation/login-validation';

class Login extends Block {

    constructor() {

        const loginInputProps = {
            tittle: 'Логин',
            name: 'login',
            type: 'text',
            error: '',
            events: {
              focus: (event: Event) => {

              },
                blur: (event: Event) => {
                  const valid = new LoginValidation();
                  valid.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const passwordInputProps = {
            tittle: 'Пароль',
            name: 'password',
            type: 'password',
            settings: {withInternalID: true}
        };

        const buttonProps = {
            text: 'авторизоваться',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    const loginForm: HTMLFormElement | null = document.querySelector('#loginForm');
                    if (loginForm !== null) {
                        let loginData = new FormData(loginForm);
                        loginData.forEach((value, name) => {
                            console.log(`${name}: ${value}`);
                        });
                    }

                    // window.location.href = '/chat/chat.html';
                }
            },
            settings: {withInternalID: true}
        };


        super('fragment', {
            title: 'Вход',
            components: {
                loginInput: new Input(loginInputProps),
                passwordInput: new Input(passwordInputProps),
                loginButton: new Button(buttonProps),
            }
        });
    };

    render(): string {
        return makeHtmlFromTemplate(loginTemplate, this.props);
    };

}


render('#root', new Login());