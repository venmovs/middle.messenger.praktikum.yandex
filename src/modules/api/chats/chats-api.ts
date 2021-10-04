import { BaseAPI } from '../base-api/base-api';
import { chatesObj } from '../api-operations';

class ChatsApi extends BaseAPI {
    chats(): Promise<unknown> {
        return this.http.get(chatesObj.chats);
    }

    createChat(data: { title: string }): Promise<unknown> {
        return this.http.post(chatesObj.chats, { data });
    }

    deleteChat(data: { chatId: number }): Promise<unknown> {
        return this.http.delete(chatesObj.chats, data);
    }
}

export { ChatsApi };
