import { Validation } from './validation';
import { regExp } from './regExpVariables';

class PasswordValidation extends Validation {
    constructor() {
        const { lettersAndNumbers } = regExp;
        super();
        this.length = 6;
        this.regExp = lettersAndNumbers;
    }
}

export { PasswordValidation };
