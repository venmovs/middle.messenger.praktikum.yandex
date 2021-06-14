import {Block} from '../../modules/block/block';
import {buttonTemplate} from "./button.tmpl";
import {makeHtmlFromTemplate} from "../../utils/makeHtml";

class Button extends Block{

    constructor(props: { id: string, text: string, }) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props);
    }

}

export {Button};