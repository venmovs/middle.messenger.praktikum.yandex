import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { Block } from '../../../modules/block/block';
import { profileTemplate } from './profile.tmpl';
import { render } from '../../../utils/render';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import backIcon from '../../../../static/images/icons/back.svg';
import { Button, IButton } from '../../../components/button/button';
import { Info } from '../info/info';

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
                    window.location.href = '/chat/chat.html';
                },
            },
        };

        const editButton: IButton = {
            text: 'редактировать',
            events: {
                click: () => {
                    window.location.href = '/profile/profile-edit.html';
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

render('#root', new Profile());
