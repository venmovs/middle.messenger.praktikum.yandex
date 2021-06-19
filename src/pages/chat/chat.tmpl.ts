const chatTemplate: string = `
<main class="chat">

    <section class="bg-blur bg-blur_small">

        <div class="flex space-between">

            <div class="user-info flex">
                <div class="user-info__avatar"></div>
                <div class="user-info__name text-primary">Виген Мовсисян</div>
            </div>

            <div id="buttonImageEditor"></div>

        </div>

        <div id="users"></div>


        <form class="chat__search flex align-item-end justify-content-center">
            <label class="flex direction-column align-item-center mr-1">
                <span class="text-primary text-primary_white">Поиск</span>
                <input class="custom-text-input text-primary" type="text" id="search">
            </label>

            <div id="buttonImageSearch"></div>
        </form>

    </section>

    <section class="bg-blur bg-blur_big">
        <div class="user-info flex w-100">
            <div class="user-info__avatar"></div>
            <div class="user-info__name text-primary">Виген Мовсисян</div>
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
