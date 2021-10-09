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
                async click(event) {
                    event.stopPropagation();
                    await chatController.deleteChat(props.id).then(() => {
                        console.log(state.get('chats'));
                        const chats = state.get('chats');
                        const idxDeletedChat = chats.findIndex((chat) => chat.props.id === props.id);
                        chats.splice(idxDeletedChat, 1);
                        state.save('chats', chats);
                    });
                },
            },
        };

        super('fragment', { ...props, components: { deleteChatButton: new ButtonImage(deleteChatButton) } });
    }

    render(): string {
        return makeHtmlFromTemplate(userTemplate, this.props);
    }
}

export { Users, IUsers };
