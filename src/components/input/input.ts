import { Block } from '../../modules/block/block';
import { inputsTemplate } from './inputs.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

interface IInput {
    tittle: string,
    name: string,
    type: string,
    settings: Record<string, boolean>,
}

class Input extends Block {

    constructor(props: IInput) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(inputsTemplate, this.props);
    }

}

export {Input};