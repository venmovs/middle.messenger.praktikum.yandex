import { Block } from '../../../modules/block/block';
import {makeHtmlFromTemplate} from "../../../utils/makeHtml";
import {messageTemplate} from "./message.tmpl";


interface IMessage {
    mine: boolean,
    text: string,
    time: string,
}

class Message extends Block {

    constructor(props: IMessage) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(messageTemplate, this.props);
    }
}


export { Message, IMessage };