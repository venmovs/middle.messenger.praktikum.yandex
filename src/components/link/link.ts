import { Block } from '../../modules/block/block';
import { linkTemplate } from './link.tmpl';
import { makeHtmlFromTemplate } from '../../utils/makeHtml';

interface ILink {
    text: string,
    class: string,
    events?: Record<string, (event: Event) => void>,
    settings?: Record<string, boolean>
}

class Link extends Block {
    constructor(props: ILink) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(linkTemplate, this.props);
    }
}

export { Link, ILink };
