import { Block } from '../../../modules/block/block';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { infoTemplate } from './info.tmpl';

class Info extends Block {
    constructor(props: Record<string, string>) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(infoTemplate, this.props);
    }
}

export { Info };
