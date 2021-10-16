import { state } from '../state/state';

class WebSocketAPI {
    private ws: WebSocket;
    protected userId: number;
    protected chatId: number;
    protected token: string;
    protected createChat: () => void | null;
    protected ping: any;

    constructor(userId: number, chatId: number, token: string, createChat: () => void | null) {
        this.userId = userId;
        this.chatId = chatId;
        this.token = token;
        this.createChat = createChat;
        this.init(this.userId, this.chatId, this.token);
        this.getMessage();
        this.close();
        this.error();
    }

    private init(userId: number, chatId: number, token: string) {
        this.ws = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
        this.ws.addEventListener('open', () => {
            console.log('Соединение установлено');
            this.getOldMessages();
            this.ping = setInterval(() => {
                this.ws.send('');
            }, 10000);
        });
    }

    sendMessage(message: string, type: string = 'message') {
        this.ws.send(JSON.stringify({
            content: message,
            type,
        }));
    }

    private close() {
        this.ws.addEventListener('close', (event) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
            clearInterval(this.ping);
            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });
    }

    private getMessage() {
        this.ws.addEventListener('message', (event) => {
            console.log('Получены данные', event.data);
            const parsedData = JSON.parse(event.data);
            if (Array.isArray(parsedData)) {
                state.save('chatMessages', parsedData);
                this.createChat();
            } else {
                const previousMessages = state.get('chatMessages');
                console.log('у меня есть сообщения', previousMessages);
                if (Array.isArray(previousMessages) && parsedData.type === 'message') {
                    console.log('я получил сообщение, ', parsedData);
                    state.save('chatMessages', [...previousMessages, parsedData]);
                    this.createChat();
                }
            }
        });
    }

    private error() {
        this.ws.addEventListener('error', (event) => {
            console.log('Ошибка', event.message);
        });
    }

    public getOldMessages() {
        this.sendMessage('', 'get old');
    }
}

export { WebSocketAPI };
