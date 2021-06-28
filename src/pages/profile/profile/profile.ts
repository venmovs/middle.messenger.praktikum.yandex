import '../profile.scss';

import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { Block } from '../../../modules/block/block';
import { profileTemplate } from './profile.tmpl';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import backIcon from '../../../../static/images/icons/back.svg';
import { Button, IButton } from '../../../components/button/button';
import { Info } from '../info/info';
import { Router } from '../../../modules/router/router';

const router = new Router('#app');

class Profile extends Block {
    constructor() {
        const createProfileInformation = (): Info[] => {
            const infoValue: { key: string, value: string }[] = [
                { key: 'Логин', value: 'venmovs' },
                { key: 'Телефон', value: '+7(999)922-33-75' },
                { key: 'Имя', value: 'Виген' },
                { key: 'Почта', value: 'vigen94@icloud.com' },
                { key: 'Фамилия', value: 'Мовсисян' },
            ];

            return infoValue.map((info) => {
                return new Info(info);
            });
        };

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

        super('fragment', {
            components: {
                buttonImageBack: new ButtonImage(buttonImageBack),
                editButton: new Button(editButton),
                info: createProfileInformation(),
            },
        });
    }

    render(): string {
        return makeHtmlFromTemplate(profileTemplate, this.props);
    }
}

export { Profile };
