class FormValidation {


    check(event: Event, actionIfValid?: (event: Event) => void): void {
        event.preventDefault();
        console.log(event);
        const isValid: boolean = this.validate(event);
        if(isValid) {
            if(actionIfValid !== undefined) {
                actionIfValid(event);
            } else {
                this.actionIfValid(event);
            }
        }
    }

    private validate(event: Event): boolean {
        const inputs: NodeListOf<HTMLElement> | undefined = event.target?.querySelectorAll('input');
        let valid: boolean = true;
        if (inputs !== undefined) {
            const blurEvent = new Event('blur');
            inputs.forEach((input) => {
                input.dispatchEvent(blurEvent);
                if (input.classList.contains('notValid')) {
                    valid = false;
                }
            });
        }
        return valid;
    }

    actionIfValid(event: Event) {
        const form = event.target;

        if (form !== null) {
            let formData = new FormData(form);
            formData.forEach((value, name) => {
                console.log(`${name}: ${value}`);
            });
        } else {

        }
    }
}

export { FormValidation };