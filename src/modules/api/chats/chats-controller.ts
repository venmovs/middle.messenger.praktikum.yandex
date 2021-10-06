import { ChatsApi } from './chats-api';
import {state} from "../../state/state";

const chatsApi = new ChatsApi();

class ChatsController {
    getChats() {
        return chatsApi.chats().then((response) => {
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

    addUsersToChat(data: { users: number[], chatId: number }) {
        return chatsApi.addUsersToChat(data).then((response) => {
            console.log(response);
        }).catch((e) => console.log(e));
    }

    getChatUsers(id: number) {
        return chatsApi.getChatUsers(id).then((response) => {
            if(response.status === 200) {
                state.save('activeChatToken', response.response);
            }
            return null;
        }).catch((e) => console.log(e));
    }
}

export { ChatsController };
