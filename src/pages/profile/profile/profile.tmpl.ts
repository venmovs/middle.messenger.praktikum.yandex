const profileTemplate: string = `
<main class="profile flex justify-content-center align-item-center">
    <section class="profile__wrapper">
        <div class="profile__bg">
            <div class="profile__active-part">
                <div class="profile__avatar_wrapper flex justify-content-center align-item-center">
                    <div class="profile__avatar mr-1"></div>
                    <div class="profile__name">Виген Мовсисян</div>
                </div>
                <form class="profile__form flex space-between wrap" id="info">
                </form>
                <div class="profile__button" id="editButton"></div>
                <div class="profile__back-link" id="buttonImageBack"></div>
            </div>
        </div>
    </section>
</main>
`;

export { profileTemplate };
