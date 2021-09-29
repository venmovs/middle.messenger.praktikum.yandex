import { Block } from '../../../modules/block/block';
import { FormValidation } from '../../../utils/validation/form-validation';
import { Button, IButton } from '../../../components/button/button';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import { Input } from '../../../components/input/input';
import * as inputsTypes from '../../../components/input/inputs-types';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { profileEditTemplate } from './profile-edit.tmpl';
import backIcon from '../../../../static/images/icons/back.svg';
import { Router } from '../../../modules/router/router';
import { UsersController } from '../../../modules/api/users/users-controller';
import { phoneInput } from '../../../components/input/inputs-types';

const router = new Router('#app');
const usersController = new UsersController();

class ProfileEdit extends Block {
    constructor() {
        const formValidation = new FormValidation();

        const buttonImageBack: IButtonImage = {
            name: 'back',
            image: backIcon,
            events: {
                click: () => {
                    router.go('/chats');
                },
            },
        };

        const saveButton: IButton = {
            text: 'сохранить',
            type: 'submit',
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
                    console.log(formValidation.check(event));
                },
            },
        });
    }

    componentDidMount(): void {
        this.props.components.loginInput.setProps({ value: 'asd' });
        console.log(this.props);
    }

    render(): string {
        return makeHtmlFromTemplate(profileEditTemplate, this.props);
    }
}

export { ProfileEdit };
