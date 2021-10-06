import { ChatsApi } from './chats-api';

const chatsApi = new ChatsApi();

class ChatsController {
    getChats() {
        return chatsApi.chats().then((response) => {
            console.log(response);
            if (response.status === 200) {
                return JSON.parse(response.response);
            }
            return null;
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

    addUsersToChat(data: { chatId: number, users: number[] }) {
        console.log(data);
        return chatsApi.addUsersToChat(data).then((response) => {
            console.log(response);
        }).catch((e) => console.log(e));
    }
}

export { ChatsController };
