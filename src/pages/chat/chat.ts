import './chat.scss';

import { Block } from '../../modules/block/block';
import { IUsers, Users } from './users/users';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { chatTemplate } from './chat.tmpl';
import { IMessage, Message } from './message/message';
import { ButtonImage, IButtonImage } from '../../components/button-image/button-image';
import { ButtonFile, IButtonFile } from '../../components/button-file/button-file';
import avatar from '../../../static/images/avatar/uncknow-avatar.jpeg';
import editorIcon from '../../../static/images/icons/editor.svg';
import searchIcon from '../../../static/images/icons/search.svg';
import sendIcon from '../../../static/images/icons/send.svg';
import fileIcon from '../../../static/images/icons/file.svg';
import { Router } from '../../modules/router/router';
import { AuthController } from '../../modules/api/auth/auth-controller';
import { state } from '../../modules/state/state';

const router = new Router('#app');
const authController = new AuthController();

class Chat extends Block {
    constructor() {
        const createUsers = (): Users[] => {
            const userValue: IUsers[] = [
                {
                    name: 'Катя',
                    img: avatar,
                    message: 'привет как дела?',
                    time: '10:20',
                    count: 2,
                },
                {
                    name: 'Женя Красава',
                    message: 'привет',
                    time: '12:23',
                    count: 4,
                },
                {
                    name: 'Дудь',
                    img: avatar,
                    message: 'яндекс практикум',
                    time: '10:22',
                    count: 1,
                },
                {
                    name: 'Познер',
                    message: 'прекол',
                    time: '05:22',
                },
                {
                    name: 'Алсу',
                    message: 'тадам',
                    time: '11:11',
                    count: 1,
                },
            ];

            return userValue.map((user) => {
                return new Users(user);
            });
        };

        const createMessages = (): Message[] => {
            const messageValue: IMessage[] = [
                { mine: true, text: 'Ну чо?', time: '10:30' },
                { mine: true, text: 'Ни чо', time: '10:31' },
                { mine: false, text: 'Ну чо?', time: '10:32' },
                { mine: true, text: 'ННи чо', time: '10:33' },
                { mine: false, text: 'Ну чо?', time: '10:34' },
                { mine: false, text: 'Ни чо', time: '10:35' },
                { mine: true, text: 'Ну чо?', time: '10:36' },
            ];

            return messageValue.map((message) => {
                return new Message(message);
            });
        };

        const buttonImageEditor: IButtonImage = {
            image: editorIcon,
            name: 'editor',
            events: {
                click: () => {
                    router.go('/profile');
                },
            },
        };

        const buttonImageSearch: IButtonImage = {
            image: searchIcon,
            name: 'search',
        };

        const buttonImageSend: IButtonImage = {
            image: sendIcon,
            classes: 'entry-field__send',
            name: 'send',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    const messageForm: HTMLFormElement | null = document.querySelector('#message-form');
                    console.log(`message: ${messageForm?.message.value}`);
                },
            },
        };

        const buttonFile: IButtonFile = {
            image: fileIcon,
            events: {
                change: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    const file: File = (target.files as FileList)[0];
                    console.log(file);
                },
            },
        };

        super('fragment', {
            userName: 'имя не найдено',
            userAvatar: avatar,
            components: {
                users: createUsers(),
                message: createMessages(),
                buttonImageEditor: new ButtonImage(buttonImageEditor),
                buttonImageSearch: new ButtonImage(buttonImageSearch),
                buttonImageSend: new ButtonImage(buttonImageSend),
                buttonFile: new ButtonFile(buttonFile),
            },
        });
    }

    private async loadUserToProps() {
        await authController.getUserInfo();
        const user = state.get('user');
        if (user !== null) {
            this.props.userName = user?.login;
            if (user?.avatar !== null) {
                this.setProps({ userAvatar: user?.avatar });
            }
        }
    }

    async componentDidMount() {
        await this.loadUserToProps();
    }

    render(): string {
        return makeHtmlFromTemplate(chatTemplate, this.props);
    }
}

export { Chat };
