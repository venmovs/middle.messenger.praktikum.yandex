class WebSocketAPI {
    //TODO реализовать нормальную логику класса с init для открытия ws, получения сообщений, закрытия сокета и тд
    init(userId: number, chatId: number, token: string) {
        const webSocketService = new WebSocket('wss://ya-praktikum.tech/ws/chats/');
        webSocketService.addEventListener('open', () => {
            console.log('Соединение установлено');
        });
    }

    message(message: string, type: string = 'message') {
        webSocketService.send(JSON.stringify({
            content: message,
            type: type,
        }));
    }
}

export { WebSocketAPI };
