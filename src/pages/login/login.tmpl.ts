const loginTemplate: string = `
<main class="login flex justify-content-center align-item-center">
    <section class="login__wrapper">
        <div class="login__bg">
            <div class="login__active-part flex direction-column space-between align-item-center">
                <h1 class="h1">{{title}}</h1>

                <form class="login__form flex direction-column align-item-center"
                      name="login" id="loginForm">
                      <div id="loginInput"></div>
                      <div id="passwordInput"></div>
                        <div class="login__button flex direction-column align-item-center">
                                <div id="loginButton"></div>
                            <a class="link" href="registration/registration.html">нет аккаунта?</a>
                        </div>
                </form>
            </div>
        </div>

    </section>
</main>
`;

export {loginTemplate};