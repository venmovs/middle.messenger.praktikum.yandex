import { Block } from '../../modules/block/block';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';
import { buttonImageTemplate } from './button-imag.tmpl';

interface IButtonImage {
    image: string,
    name: string,
    events?: Record<string, (event: Event) => void>,
    classes?: string,
}

class ButtonImage extends Block {
    constructor(props: IButtonImage) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(buttonImageTemplate, this.props);
    }
}

export { ButtonImage, IButtonImage };
