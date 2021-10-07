class WebSocketAPI {
    private ws: WebSocket;

    constructor(userId: number, chatId: number, token: string) {
        this.init(userId, chatId, token);
        this.close();
        this.getMessage();
        this.error();
    }

    private init(userId: number, chatId: number, token: string) {
        this.ws = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
        this.ws.addEventListener('open', () => {
            console.log('Соединение установлено');
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

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });
    }

    private getMessage() {
        this.ws.addEventListener('message', (event) => {
            console.log('Получены данные', event.data);
        });
    }

    private error() {
        this.ws.addEventListener('error', (event) => {
            console.log('Ошибка', event.message);
        });
    }
}

export { WebSocketAPI };
