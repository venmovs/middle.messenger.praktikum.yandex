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
import { AuthController } from '../../../modules/api/auth/auth-controller';
import {isPlainObject} from "../../../utils/object/is-plain";

const router = new Router('#app');
const usersController = new UsersController();
const authController = new AuthController();

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
                fullName: '',
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

    takeAuthUserValuesOnInputs(props: Record<string, any>, newValue: Record<string, string | number>) {
        Object.values(props).forEach((key) => {
            if (typeof key !== 'string' && Object.prototype.hasOwnProperty.call(key, 'props')) {
                const userInfo: string | number = newValue[key.props.name];
                if (userInfo !== undefined) {
                    key.setProps({ value: userInfo });
                }
            }
        });
    }

    async componentDidMount() {
        const userInfo = await authController.getUserInfo();
        if (userInfo !== null || undefined) {
            this.props.fullName = `${userInfo.first_name} ${userInfo.second_name}`;
            this.takeAuthUserValuesOnInputs(this.props.components, userInfo);
        }
    }

    render(): string {
        return makeHtmlFromTemplate(profileEditTemplate, this.props);
    }
}

export { ProfileEdit };
