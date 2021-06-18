import { Block } from '../../modules/block/block';
import { buttonTemplate } from './button.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

interface IButton {
    text: string,
    events?: () => void,
    settings?: Record<string, boolean>
}

class Button extends Block{

    constructor(props: IButton) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props);
    }

}

export {Button, IButton};