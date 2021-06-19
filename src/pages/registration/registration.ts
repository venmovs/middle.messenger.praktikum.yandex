import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { registrationTemplate } from './registration.tmpl';
import { Block } from '../../modules/block/block';
import { render } from '../../utils/render';
import { Input } from '../../components/input/input';
import { Button, IButton } from '../../components/button/button';
import { FormValidation } from '../../utils/validation/form-validation';
import * as inputsTypes from '../../components/input/inputs-types';

class Registration extends Block {
    constructor() {
        const formValidation = new FormValidation();

        const registrationButton: IButton = {
            text: 'зарегестрироваться',
            settings: { withInternalID: true },
        };

        super('fragment', {
            title: 'Регистрация',
            components: {
                loginInput: new Input(inputsTypes.loginInput),
                nameInput: new Input(inputsTypes.nameInput),
                mailInput: new Input(inputsTypes.mailInput),
                passwordInput: new Input(inputsTypes.passwordInput),
                secondNameInput: new Input(inputsTypes.secondNameInput),
                phoneInput: new Input(inputsTypes.phoneInput),
                confirmPasswordInput: new Input(inputsTypes.confirmPasswordInput),
                registrationButton: new Button(registrationButton),
            },
            events: {
                submit: (event: Event) => {
                    const changeLocation = () => {
                        window.location.href = '/index.html';
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