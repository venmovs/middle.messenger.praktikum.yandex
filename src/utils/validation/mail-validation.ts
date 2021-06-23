import { Validation } from './validation';
import { regExp } from './regExpVariables';

class MailValidation extends Validation {
    constructor() {
        const { mail } = regExp;
        super();
        this.regExp = mail;
    }
}

export { MailValidation };
