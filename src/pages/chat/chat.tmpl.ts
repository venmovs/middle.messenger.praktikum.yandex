const chatTemplate: string = `
<main class="chat">

    <section class="bg-blur bg-blur_small">

        <div class="flex space-between">

            <div class="user-info flex">
                <div class="user-info__avatar"></div>
                <div class="user-info__name text-primary">Виген Мовсисян</div>
            </div>

            <button class="button button_small flex justify-content-center align-item-center" id="editor">
                <img src="../../images/icons/editor.svg" class="icon" alt="editor">
            </button>

        </div>

        <div id="users"></div>


        <form class="chat__search flex align-item-end justify-content-center">
            <label class="flex direction-column align-item-center mr-1">
                <span class="text-primary text-primary_white">Поиск</span>
                <input class="custom-text-input text-primary" type="text" id="search">
            </label>

            <button class="button button_small flex justify-content-center align-item-center">
                <img src="../../images/icons/search.svg" class="icon" alt="search">
            </button>
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
            <label class="entry-field__file custom-file-upload flex justify-content-center align-item-center">
                <input accept=".jpg, .jpeg, .png"
                       type="file"
                       id="addFileBtn">
                <img src="../../images/icons/file.svg" class="icon" alt="file">
            </label>


            <label class="entry-field__text w-100 mr-1">
                <input placeholder="Сообщение" name="message" class="custom-text-input text-primary w-100" type="text">
            </label>

            <button class="entry-field__send button button_small flex justify-content-center align-item-center"
                    id="sendButton">
                <img src="../../images/icons/send.svg" class="icon" alt="send">
            </button>
        </form>
    </section>

</main>`;

export { chatTemplate };