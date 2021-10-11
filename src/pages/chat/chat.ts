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
import addChat from '../../../static/images/icons/addChat.svg';
import { Router } from '../../modules/router/router';
import { AuthController } from '../../modules/api/auth/auth-controller';
import { state } from '../../modules/state/state';
import { ChatsController } from '../../modules/api/chats/chats-controller';
import { UsersController } from '../../modules/api/users/users-controller';
import { WebSocketAPI } from '../../modules/web-socket/web-socket';

const router = new Router('#app');
const authController = new AuthController();
const chatsController = new ChatsController();
const usersController = new UsersController();

class Chat extends Block {
    constructor() {
        const buttonImageEditor: IButtonImage = {
            image: editorIcon,
            name: 'editor',
            events: {
                click: () => {
                    router.go('/profile');
                },
            },
        };

        const buttonCreateNewChat: IButtonImage = {
            image: addChat,
            name: 'createChat',
            events: {
                click: async () => {
                    await chatsController.createChat({ title: 'new chat' }); // TODO пока стоит заглушка, сделать возможность вписывания названия чата
                    chatsController.getChats().then((chats) => {
                        this.loadChats(chats);
                    });
                },
            },
        };

        const buttonImageSearch: IButtonImage = {
            image: searchIcon,
            name: 'search',
            type: 'submit',
            events: {
                click: async (event: Event) => {
                    event.preventDefault();
                    const searchValue: HTMLFormElement | null = document.querySelector('#search-form');
                    const foundedUser = await usersController.searchUsers(
                        {
                            login: searchValue?.search.value,
                        },
                    );
                    const activeChatId = await state.get('activeChatId');
                    const users = foundedUser[0]?.id;
                    const chatId = activeChatId;
                    const requestData = { users: [users], chatId };
                    console.log(requestData);
                    if (users && activeChatId) {
                        console.log('i am done');
                        console.log(users, chatId);
                        await chatsController.addUsersToChat(requestData);
                    }
                },
            },
        };

        const buttonImageSend: IButtonImage = {
            image: sendIcon,
            classes: 'entry-field__send',
            name: 'send',
            type: 'button',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    const messageForm: HTMLFormElement | null = document.querySelector('#message-form');
                    const webSocket: WebSocketAPI = state.get('webSocket');
                    webSocket.sendMessage(messageForm?.message.value);
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
                users: [new Users({ title: 'чаты отсутсвуют' })],
                message: new Message(null),
                buttonCreateNewChat: new ButtonImage(buttonCreateNewChat),
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

    private createChatMessages(): void | null {
        const chatMessages = state.get('chatMessages');
        const userId = state.get('user.id');
        const messages: IMessage[] | [] = [];
        if (!Array.isArray(chatMessages)) return null;
        chatMessages.sort((a, b) => {
            return a.time.localeCompare(b.time);
        });
        for (let i = 0; i < chatMessages.length; i += 1) {
            const userMessage: IMessage = {};
            userMessage.content = chatMessages[i].content;
            const date = new Date(chatMessages[i].time);
            userMessage.time = date.toLocaleString('ru-RU');
            userMessage.mine = chatMessages[i].user_id === userId;
            messages.push(userMessage);
        }

        const messageBlocks = messages.map((message) => {
            return new Message(message);
        });
        this.props.components.message = messageBlocks;
        this.saveState('messageBlocks', messageBlocks);
    }

    async handlerClickToChat(id: number) {
        this.saveState('activeChatId', id);
        await chatsController.getChatToken(id);
        await chatsController.getChatUsers(id);
        const userId = state.get('user.id');
        const chatId = state.get('activeChatId');
        const activeChatToken = state.get('activeChatToken.token');
        const createChatMessages = this.createChatMessages.bind(this);
        const webSocket = new WebSocketAPI(userId, chatId, activeChatToken, createChatMessages);
        this.saveState('webSocket', webSocket);
    }

    loadChats(chatValue: IUsers[]): Users[] {
        const chatArray = chatValue.map((chat) => {
            chat.events = {
                click: async (event: Event) => {
                    event.stopPropagation();
                    if (typeof chat.id === 'number') {
                        await this.handlerClickToChat(chat.id);
                    }
                },
            };
            return new Users(chat);
        });
        this.props.components.users = chatArray;
        this.saveState('chats', chatArray);
    }

    async componentDidMount() {
        await this.loadUserToProps();
        chatsController.getChats().then((chats) => {
            this.loadChats(chats);
        });
    }

    render(): string {
        return makeHtmlFromTemplate(chatTemplate, this.props);
    }
}

export { Chat };
