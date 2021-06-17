abstract class Validation {

    protected regExp: RegExp | null;
    protected length: number | null;

    check(event: Event): void {
        this._validate(event);
    }

    private _validate(event: Event): void {

        let isValid = this.validate(event);

        if (this.regExp && isValid) {
            isValid = this.regExp.test(event.target.value);
        }

        if (this.length && isValid) {
            isValid = event.target.length > this.length;
        }

        const errorMessage = event.target?.nextElementSibling;

        if (!isValid) {
            event.target?.classList.add('custom-text-input_error');
            errorMessage.classList.remove('hidden');
        } else {
            event.target?.classList.remove('custom-text-input_error');

            if (!errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }
        }

    }

    protected validate(event: Event): boolean {
        return true;
    };

}


export {Validation};