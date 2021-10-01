const profileEditPasswordTemplate: string = `
<main class="profile flex justify-content-center align-item-center">
    <section class="profile__wrapper">
        <div class="profile__bg">
            <div class="profile__active-part">
                <div class="profile__avatar_wrapper flex justify-content-center align-item-center">
                    <div class="profile__avatar mr-1"></div>
                    <div class="profile__name">{{ fullName }}</div>
                </div>
                <form class="profile__form flex space-between wrap">
                        <div id="passwordInput"></div>
                        <div id="confirmPasswordInput"></div>
                        <div class="profile__button_save" id="saveButton"></div>
                </form>
                <div class="profile__back-link" id="buttonImageBack"></div>
            </div>
        </div>
    </section>
</main>
`;

export { profileEditPasswordTemplate };
