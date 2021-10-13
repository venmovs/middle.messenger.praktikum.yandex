const profileEditPasswordTemplate: string = `
<main class="profile flex justify-content-center align-item-center">
    <section class="profile__wrapper">
        <div class="profile__bg">
            <div class="profile__active-part">
                <form class="profile__form flex space-between wrap">
                        <div id="oldPassword"></div>
                        <div id="newPassword"></div>
                        <div class="profile__button_save" id="saveButton"></div>
                </form>
                <div class="profile__back-link" id="buttonImageBack"></div>
            </div>
        </div>
    </section>
</main>
`;

export { profileEditPasswordTemplate };
