const loginTemplate: string = `
<main class="login flex justify-content-center align-item-center">
    <section class="login__wrapper">
        <div class="login__bg">
            <div class="login__active-part flex direction-column space-between align-item-center">
                <h1 class="h1">{{title}}</h1>

                <form class="login__form flex direction-column align-item-center"
                      name="login">
                      {{{loginInput}}}
                      {{{passwordInput}}}
                </form>

                <div class="login__button flex direction-column align-item-center">
                        {{{loginButton}}}
                    <a class="link" href="registration/registration.html">нет аккаунта?</a>
                </div>
            </div>
        </div>

    </section>
</main>
`;

export {loginTemplate};