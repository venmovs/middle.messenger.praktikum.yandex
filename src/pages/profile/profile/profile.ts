import '../profile.scss';

import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { Block } from '../../../modules/block/block';
import { profileTemplate } from './profile.tmpl';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import backIcon from '../../../../static/images/icons/back.svg';
import { Button, IButton } from '../../../components/button/button';
import { Router } from '../../../modules/router/router';
import { AuthController } from '../../../modules/api/auth/auth-controller';
import { profileInformation, createProfileInformation } from './profile-information';
import avatar from '../../../../static/images/avatar/uncknow-avatar.jpeg';

const router = new Router('#app');
const authController = new AuthController();

class Profile extends Block {
    constructor() {
        const buttonImageBack: IButtonImage = {
            name: 'back',
            image: backIcon,
            events: {
                click: () => {
                    router.back();
                },
            },
        };

        const editButton: IButton = {
            text: 'редактировать',
            events: {
                click: () => {
                    router.go('/profile-edit');
                },
            },
        };

        const changePasswordButton: IButton = {
            text: 'изменить пароль',
            events: {
                click: () => {
                    router.go('/profile-edit-password');
                },
            },
        };

        const exitButton: IButton = {
            text: 'Выйти',
            classes: 'button_red',
            events: {
                click: async () => {
                    await authController.logout().then(() => {
                        router.go('/');
                    });
                },
            },
        };

        super('fragment', {
            userAvatar: '',
            components: {
                fullName: '',
                buttonImageBack: new ButtonImage(buttonImageBack),
                changePasswordButton: new Button(changePasswordButton),
                editButton: new Button(editButton),
                exitButton: new Button(exitButton),
                info: createProfileInformation(profileInformation),
            },
        });
    }

    changeDefaultUserValues(
        userInfo: Record<string, unknown>,
        defaultValues,
    ) {
        for (let i = 0; i < defaultValues.length; i += 1) {
            defaultValues[i].props.value = userInfo[defaultValues[i].props.id];
        }
        return defaultValues;
    }

    async componentDidMount() {
        console.log('mount');
        const userInfo = await authController.getUserInfo();
        if (userInfo !== null) {
            this.props.fullName = `${userInfo.first_name} ${userInfo.second_name}`;
            this.changeDefaultUserValues(userInfo, this.props.components.info);
            if (userInfo.avatar) {
                this.setProps({ userAvatar: `https://ya-praktikum.tech/api/v2/resources${userInfo?.avatar}` });
            } else {
                this.setProps({ userAvatar: avatar});
            }
        }
    }

    render(): string {
        return makeHtmlFromTemplate(profileTemplate, this.props);
    }
}

export { Profile };
