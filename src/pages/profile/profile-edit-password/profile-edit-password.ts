import { Block } from '../../../modules/block/block';
import { FormValidation } from '../../../utils/validation/form-validation';
import { Button, IButton } from '../../../components/button/button';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import { Input } from '../../../components/input/input';
import * as inputsTypes from '../../../components/input/inputs-types';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { profileEditPasswordTemplate } from './profile-edit-password.tmpl';
import backIcon from '../../../../static/images/icons/back.svg';
import { Router } from '../../../modules/router/router';
import { UsersController } from '../../../modules/api/users/users-controller';
import { AuthController } from '../../../modules/api/auth/auth-controller';

const router = new Router('#app');
const usersController = new UsersController();
const authController = new AuthController();

class ProfileEditPassword extends Block {
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
                oldPassword: new Input(inputsTypes.oldPassword),
                newPassword: new Input(inputsTypes.newPassword),
                saveButton: new Button(saveButton),
                buttonImageBack: new ButtonImage(buttonImageBack),
            },
            events: {
                submit: async (event: Event) => {
                    const passwordData = formValidation.check(event);
                    if (passwordData !== null) {
                        await usersController.password(passwordData);
                    }
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
        return makeHtmlFromTemplate(profileEditPasswordTemplate, this.props);
    }
}

export { ProfileEditPassword };
