const chatTemplate: string = `
<main class="chat">
    <section class="bg-blur bg-blur_small">
        <div class="flex space-between">
            <div class="user-info flex">
                <img src="{{ userAvatar }}" alt="avatart" class="user-info__avatar">
                <div class="user-info__name text-primary">{{ userName }}</div>
            </div>
            <div class="flex">
                <div class="mr-1" id="buttonImageEditor"></div>
                <div id="buttonCreateNewChat"></div>
            </div>
        </div>
        <div id="users"></div>
    </section>
    <section class="bg-blur bg-blur_big">
        <div class="user-info flex w-100">
            <form class="chat__search flex align-item-end justify-content-center" id="search-form">
            <label class="flex direction-column align-item-center mr-1">
                <span class="text-primary text-primary_white">Добавьте пользователя</span>
                <input class="custom-text-input text-primary" type="text" id="search">
            </label>
            <div id="buttonImageSearch"></div>
        </form>
        </div>
        <div class="message-field mb-1" id="message">
        </div>
        <form class="entry-field" id="message-form">
            <div id="buttonFile"></div>
            <label class="entry-field__text w-100 mr-1">
                <input placeholder="Сообщение" name="message" class="custom-text-input text-primary w-100" type="text">
            </label>
            <div id="buttonImageSend"></div>
        </form>
    </section>
</main>`;

export { chatTemplate };
