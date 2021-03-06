import { Block } from '../../../modules/block/block';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { userTemplate } from './users.tmpl';
import { ButtonImage, IButtonImage } from '../../../components/button-image/button-image';
import deleteIcon from '../../../../static/images/icons/delete.svg';
import { ChatsController } from '../../../modules/api/chats/chats-controller';
import { state } from '../../../modules/state/state';

const chatController = new ChatsController();

interface IUsers {
    title: string,
    avatar?: string,
    last_message?: string,
    id?: number,
    unread_count?: number
}

class Users extends Block {
    constructor(props: IUsers) {
        const deleteChatButton: IButtonImage = {
            image: deleteIcon,
            classes: 'entry-field__send button_trash',
            name: 'send',
            type: 'button',
            events: {
                async click() {
                    await chatController.deleteChat(props.id).then((response) => {
                        if (response === null) return;
                        console.log(response);
                        console.log(state.get('chats'));
                        const chats: Users[] = state.get('chats');
                        const idxDeletedChat = chats.findIndex((chat) => chat.props.id === props.id);
                        chats.splice(idxDeletedChat, 1);
                        state.save('chats', chats);
                    });
                },
            },
        };

        super('fragment', { ...props, components: { deleteChatButton: new ButtonImage(deleteChatButton) } });
    }

    protected componentDidUpdate(oldProps?: ProxyHandler<object>, newProps?: ProxyHandler<object>): boolean {
        console.log('old props', oldProps);
        console.log('new props', newProps);
        return super.componentDidUpdate(oldProps, newProps);
    }

    render(): string {
        return makeHtmlFromTemplate(userTemplate, this.props);
    }
}

export { Users, IUsers };
