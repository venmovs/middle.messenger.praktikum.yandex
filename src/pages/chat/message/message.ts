import { Block } from '../../../modules/block/block';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { messageTemplate } from './message.tmpl';
import e from "express";
import {chooseChatTmpl} from "./choose-chat.tmpl";

interface IMessage {
    mine: boolean,
    text: string,
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
        if (this.props === null) {
            return makeHtmlFromTemplate(messageTemplate, this.props);
        }
        return makeHtmlFromTemplate(chooseChatTmpl, this.props);
    }
}

export { Message, IMessage };
