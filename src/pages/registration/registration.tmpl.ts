const registrationTemplate: string = `
<main class="registration flex justify-content-center align-item-center">
    <section class="registration__wrapper">
        <div class="registration__bg">
            <div class="registration__active-part flex direction-column align-item-center">
                <h1 class="h1">{{title}}</h1>
                <form class="registration__form flex space-between wrap"
                      id="registration-forms">
                <div id="loginInput"></div>
                <div id="nameInput"></div>
                <div id="mailInput"></div>
                <div id="passwordInput"></div>
                <div id="secondNameInput"></div>
                <div id="phoneInput"></div>
                <div id="confirmPasswordInput"></div>
                <div class="registration__button flex direction-column align-item-center">
                    <div id="registrationButton">
                    </div>
                    <a class="link" href="/index.html">есть аккаунт?</a>
                </div>
                </form>
            </div>
        </div>
    </section>
</main>`;

export { registrationTemplate };
