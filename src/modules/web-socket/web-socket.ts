class WebSocketAPI {
    init() {
        const webSocketService = new WebSocket('wss://ya-praktikum.tech/ws/chats/');
        webSocketService.addEventListener('open', () => {
            console.log('Соединение установлено');

            webSocketService.send(JSON.stringify({
                content: 'Моё первое сообщение миру!',
                type: 'message',
            }));
        });
    }
}

export { WebSocketAPI };
