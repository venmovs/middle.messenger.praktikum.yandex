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
        defaultValues: Record<string, string>[],
    ) {
        for (let i = 0; i < defaultValues.length; i += 1) {
            console.log(defaultValues[i]);
            defaultValues[i].value = userInfo[defaultValues[i].id];
        }
        return defaultValues;
    }

    async componentDidMount() {
        const userInfo = await authController.getUserInfo();
        if (userInfo !== null) {
            this.props.fullName = `${userInfo.first_name} ${userInfo.second_name}`;
            const updatedUserValues = this.changeDefaultUserValues(userInfo, profileInformation);
            this.props.components.info = null;
            this.props.components.info = createProfileInformation(updatedUserValues);

            console.log(this.props.components);
        }
    }

    render(): string {
        return makeHtmlFromTemplate(profileTemplate, this.props);
    }
}

export { Profile };
