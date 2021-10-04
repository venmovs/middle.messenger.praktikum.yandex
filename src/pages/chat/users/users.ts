import { Block } from '../../../modules/block/block';
import { makeHtmlFromTemplate } from '../../../utils/makeHtml';
import { userTemplate } from './users.tmpl';

interface IUsers {
    title: string,
    avatar?: string,
    last_message?: string,
    id?: number,
    unread_count?: number
}

class Users extends Block {
    constructor(props: IUsers) {
        super('fragment', props);
    }

    render(): string {
        console.log(this.props);
        return makeHtmlFromTemplate(userTemplate, this.props);
    }
}

export { Users, IUsers };
