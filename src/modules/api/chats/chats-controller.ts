import { ChatsApi } from './chats-api';

const chatsApi = new ChatsApi();

class ChatsController {
    getChats() {
        return chatsApi.chats().then((response) => {
            console.log(response);
        }).catch((e) => console.log(e));
    }

    createChat(data: { title: string }) {
        return chatsApi.createChat(data).then((response) => {
            console.log(response);
        }).catch((e) => console.log(e));
    }

    deleteChat(data: { chatId: number }) {
        return chatsApi.deleteChat(data).then((response) => {
            console.log(response);
        }).catch((e) => console.log(e));
    }
}

export { ChatsController };
