class FormValidation {
    check(event: Event, actionIfValid?: (event: Event) => void): void | Record<string, any> {
        event.preventDefault();
        const isValid: boolean = this.validate(event);
        if (isValid) {
            if (typeof actionIfValid === 'function') {
                actionIfValid(event);
            } else {
                return this.actionIfValid(event);
            }
        }
    }

    private validate(event: Event): boolean {
        const target = event.target as HTMLTextAreaElement;
        const inputs: NodeListOf<HTMLElement> | undefined = target.querySelectorAll('input');
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
        const form = event.target as HTMLFormElement;
        if (form !== null) {
            const formData = new FormData(form);
            const resultObject: Record<string, any> = {};
            formData.forEach((value, name) => {
                resultObject[name] = value;
            });
            return resultObject;
        }
    }
}

export { FormValidation };
