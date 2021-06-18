import {Block} from "../../../modules/block/block";
import {makeHtmlFromTemplate} from "../../../utils/makeHtml";
import {errorMessageTemplate} from "./error-message.tmpl";

interface IErrorMessage {
    status: string,
    message: string,
}

class ErrorMessage extends Block {

    constructor(props: IErrorMessage) {
        super('fragment', props);
    }

    render(): string {
        return makeHtmlFromTemplate(errorMessageTemplate, this.props);
    }
}

export { ErrorMessage, IErrorMessage };