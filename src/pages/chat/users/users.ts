import {Block} from "../../../modules/block/block";
import {makeHtmlFromTemplate} from "../../../utils/makeHtml";
import { userTemplate } from "./users.tmpl";

interface IUsers {
    name: string,
    img?: string,
    message?: string,
    time?: string,
    count?: number
}

class Users extends Block {

    constructor(props: IUsers) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(userTemplate, this.props);
    }

}

export { Users, IUsers };