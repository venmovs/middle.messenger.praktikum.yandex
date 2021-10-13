import { Block } from '../../modules/block/block';
import { inputsTemplate } from './inputs.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

interface IInput {
    title: string,
    name: string,
    type: string,
    error: string,
    value: string,
    settings: Record<string, boolean>,
    events?: Record<string, (event: Event) => void>,
}

class Input extends Block {
    constructor(props: IInput) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(inputsTemplate, this.props);
    }
}

export { Input, IInput };
