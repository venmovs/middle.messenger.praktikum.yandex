import { Block } from '../../modules/block/block';
import { buttonTemplate } from './button.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

class Button<T> extends Block{

    constructor(props: {text: string, events?: T, settings?: Record<string, boolean>}) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(buttonTemplate, this.props);
    }

}

export {Button};