const loginTemplate: string = `
<main class="login flex justify-content-center align-item-center">
    <section class="login__wrapper">
        <div class="login__bg">
            <div class="login__active-part">
                <h1 class="h1">{{title}}</h1>
                <form class="login__form flex direction-column align-item-center"
                      name="login" id="loginForm">
                      <div id="loginInput"></div>
                      <div id="passwordInput"></div>
                        <div class="login__button flex direction-column align-item-center">
                         <div id="loginButton"></div>
                         <div id="loginLink"></div>
                        </div>
                </form>
            </div>
        </div>
    </section>
</main>
`;

export { loginTemplate };
