import { Block } from '../../modules/block/block';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { buttonFileTemplate } from './button-file.tmpl';

interface IButtonFile {
    image: string,
    events?: Record<string, (event: Event) => void>,
    classes?: string,
}

class ButtonFile extends Block {
    constructor(props: IButtonFile) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(buttonFileTemplate, this.props);
    }
}

export { ButtonFile, IButtonFile };
