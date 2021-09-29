import './registration.scss';

import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { registrationTemplate } from './registration.tmpl';
import { Block } from '../../modules/block/block';
import { Input } from '../../components/input/input';
import { Button, IButton } from '../../components/button/button';
import { Link, ILink } from '../../components/link/link';
import { FormValidation } from '../../utils/validation/form-validation';
import * as inputsTypes from '../../components/input/inputs-types';
import { Router } from '../../modules/router/router';
import { AuthController } from '../../modules/api/auth-controller';
import {IRegistrationRequest} from "../../modules/api/auth-api";

const router = new Router('#app');

class Registration extends Block {
    constructor() {
        const formValidation = new FormValidation();

        const registrationButton: IButton = {
            text: 'зарегестрироваться',
            type: 'submit',
            settings: { withInternalID: true },
        };

        const registrationLink: ILink = {
            text: 'есть аккаунт?',
            class: 'link',
            events: {
                click: () => {
                    router.go('/');
                },
            },
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
                registrationLink: new Link(registrationLink),
            },
            events: {
                submit: (event: Event) => {
                    const formData: IRegistrationRequest = formValidation.check(event);
                    const signUp = async () => {
                        const registrationController = new AuthController();
                        await registrationController.register(formData);
                    };
                    formValidation.check(event, signUp);
                },
            },
        });
    }

    render(): string {
        return makeHtmlFromTemplate(registrationTemplate, this.props);
    }
}

export { Registration };
