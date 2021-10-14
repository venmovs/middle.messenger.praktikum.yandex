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
import { AuthController } from '../../../modules/api/auth/auth-controller';
import addImage from '../../../../static/images/icons/addImage.svg';
import { ButtonFile, IButtonFile } from '../../../components/button-file/button-file';
import avatar from '../../../../static/images/avatar/uncknow-avatar.jpeg';

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
                    router.back();
                },
            },
        };

        const saveButton: IButton = {
            text: 'сохранить',
            type: 'submit',
        };

        const buttonChangeAvatar: IButtonFile = {
            classes: 'mr-1',
            image: addImage,
            formId: 'changeAvatarForm',
            events: {
                change: async (event: Event) => {
                    const form: HTMLFormElement = document.getElementById('changeAvatarForm');
                    const target = event.target as HTMLInputElement;
                    const file: File = (target.files as FileList)[0];
                    const formData = new FormData(form);
                    formData.append('avatar', file);
                    const response = await usersController.userAvatar(formData);
                    this.saveState('userAvatar', response.avatar);
                    console.log(this.state.get('userAvatar'));
                },
            },
        };

        super('fragment', {
            userAvatar: '',
            components: {
                fullName: '',
                buttonChangeAvatar: new ButtonFile(buttonChangeAvatar),
                loginInput: new Input(inputsTypes.loginInput),
                nameInput: new Input(inputsTypes.nameInput),
                mailInput: new Input(inputsTypes.mailInput),
                secondNameInput: new Input(inputsTypes.secondNameInput),
                phoneInput: new Input(inputsTypes.phoneInput),
                saveButton: new Button(saveButton),
                buttonImageBack: new ButtonImage(buttonImageBack),
            },
            events: {
                submit: (event: Event) => {
                    const profileData = formValidation.check(event);
                    if (profileData !== null) {
                        profileData.display_name = ''; // не понимаю зачем этот параметр
                        usersController.profileInformation(profileData);
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
        if (userInfo !== null) {
            this.props.fullName = `${userInfo.first_name} ${userInfo.second_name}`;
            if (userInfo.avatar) {
                this.setProps({ userAvatar: `https://ya-praktikum.tech/api/v2/resources${userInfo?.avatar}` });
            } else {
                this.setProps({ userAvatar: avatar });
            }
            this.takeAuthUserValuesOnInputs(this.props.components, userInfo);
        }
    }

    render(): string {
        return makeHtmlFromTemplate(profileEditTemplate, this.props);
    }
}

export { ProfileEdit };
