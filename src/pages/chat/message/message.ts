import { Block } from '../../../modules/block/block';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { messageTemplate } from './message.tmpl';
import { chooseChatTmpl } from './choose-chat.tmpl';

interface IMessage {
    mine: boolean,
    content: string,
    time: string,
}

class Message extends Block {
    constructor(props: IMessage | null) {
        if (props !== null) {
            super('fragment', props);
        } else {
            super('fragment', { title: 'Выберите чат' });
        }
    }

    render(): string {
        let resultLayout = '';

        if (!this.props.title) {
            resultLayout = makeHtmlFromTemplate(messageTemplate, this.props);
        } else {
            resultLayout = makeHtmlFromTemplate(chooseChatTmpl, this.props);
        }
        return resultLayout;
    }
}

export { Message, IMessage };
