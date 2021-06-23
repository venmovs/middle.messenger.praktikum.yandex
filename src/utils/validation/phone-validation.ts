import { Validation } from './validation';
import { regExp } from './regExpVariables';

class PhoneValidation extends Validation {
    constructor() {
        const { phone } = regExp;
        super();
        this.regExp = phone;
    }
}

export { PhoneValidation };
