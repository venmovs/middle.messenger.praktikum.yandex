import { Validation } from './validation';

class NameValidation extends Validation {
    constructor() {
        super();
        this.length = 3;
    }
}

export { NameValidation };
