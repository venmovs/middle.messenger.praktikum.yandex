import {makeHtmlFromTemplate} from '../../utils/makeHtml';
import {registrationTemplate} from './registration.tmpl';
import {Block} from "../../modules/block/block";
import {render} from "../../utils/render";
import {IInput, Input} from "../../components/input/input";
import {LoginValidation} from "../../utils/validation/login-validation";
import {PasswordValidation} from "../../utils/validation/password-validation";
import {MailValidation} from "../../utils/validation/mail-validation";
import {PhoneValidation} from "../../utils/validation/phone-validation";
import {NameValidation} from "../../utils/validation/name-validation";
import {Button, IButton} from "../../components/button/button";
import {FormValidation} from "../../utils/validation/form-validation";

class Registration extends Block {

    constructor() {

        const formValidation = new FormValidation();
        const loginValidation = new LoginValidation();
        const passwordValidation = new PasswordValidation();
        const mailValidation = new MailValidation();
        const phoneValidation = new PhoneValidation();
        const nameValidation = new NameValidation();

        const loginInput: IInput = {
            tittle: 'Логин',
            name: 'login',
            type: 'text',
            error: 'мало символов',
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
            type: 'text',
            error: 'слабый пароль',
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

        const mailInput: IInput = {
            tittle: 'Почта',
            name: 'mail',
            type: 'text',
            error: 'почта с ошибкой',
            events: {
                focus: (event: Event) => {
                    mailValidation.clear(event);
                },
                blur: (event: Event) => {
                    mailValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const phoneInput: IInput = {
            tittle: 'Телефон',
            name: 'phone',
            type: 'text',
            error: 'номер с ошибкой',
            events: {
                focus: (event: Event) => {
                    phoneValidation.clear(event);
                },
                blur: (event: Event) => {
                    phoneValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const nameInput: IInput = {
            tittle: 'Имя',
            name: 'name',
            type: 'text',
            error: 'больше 3 букв',
            events: {
                focus: (event: Event) => {
                    nameValidation.clear(event);
                },
                blur: (event: Event) => {
                    nameValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const secondNameInput: IInput = {
            tittle: 'Фамилия',
            name: 'secondName',
            type: 'text',
            error: 'больше 3 букв',
            events: {
                focus: (event: Event) => {
                    nameValidation.clear(event);
                },
                blur: (event: Event) => {
                    nameValidation.check(event);
                }
            },
            settings: {withInternalID: true}
        };

        const confirmPasswordInput: IInput = {
            tittle: 'Пароль (еще раз)',
            name: 'password',
            type: 'text',
            error: 'слабый пароль',
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

        const registrationButton: IButton = {
            text: 'зарегестрироваться',
            settings: {withInternalID: true}
        };


        super('fragment', {
            title: 'Регистрация',
            components: {
                loginInput: new Input(loginInput),
                nameInput: new Input(nameInput),
                mailInput: new Input(mailInput),
                passwordInput: new Input(passwordInput),
                secondNameInput: new Input(secondNameInput),
                phoneInput: new Input(phoneInput),
                confirmPasswordInput: new Input(confirmPasswordInput),
                registrationButton: new Button(registrationButton),
            },
            events: {
                submit: (event: Event) => {
                    const changeLocation = () => {
                        window.location.href = '/index.html'
                    };
                    formValidation.check(event, changeLocation);
                },
            },
        });
    }


    render(): string {
        return makeHtmlFromTemplate(registrationTemplate, this.props);
    }
}

render('#root', new Registration());
