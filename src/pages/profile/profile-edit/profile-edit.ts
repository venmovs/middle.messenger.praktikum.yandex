import { Block } from '../../../modules/block/block';
import { FormValidation } from '../../../utils/validation/form-validation';
import { Button, IButton } from '../../../components/button/button';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import { Input } from '../../../components/input/input';
import * as inputsTypes from '../../../components/input/inputs-types';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { profileEditTemplate } from './profile-edit.tmpl';
import { render } from '../../../utils/render';
import backIcon from '../../../../static/images/icons/back.svg';

class ProfileEdit extends Block {
    constructor() {
        const formValidation = new FormValidation();

        const buttonImageBack: IButtonImage = {
            name: 'back',
            image: backIcon,
            events: {
                click: () => {
                    window.location.href = '/chat/chat.html';
                },
            },
        };

        const saveButton: IButton = {
            text: 'сохранить',
        };

        super('fragment', {
            components: {
                loginInput: new Input(inputsTypes.loginInput),
                nameInput: new Input(inputsTypes.nameInput),
                mailInput: new Input(inputsTypes.mailInput),
                passwordInput: new Input(inputsTypes.passwordInput),
                secondNameInput: new Input(inputsTypes.secondNameInput),
                phoneInput: new Input(inputsTypes.phoneInput),
                confirmPasswordInput: new Input(inputsTypes.confirmPasswordInput),
                saveButton: new Button(saveButton),
                buttonImageBack: new ButtonImage(buttonImageBack),
            },
            events: {
                submit: (event: Event) => {
                    formValidation.check(event);
                },
            },
        });
    }

    render(): string {
        return makeHtmlFromTemplate(profileEditTemplate, this.props);
    }
}

render('#root', new ProfileEdit());
