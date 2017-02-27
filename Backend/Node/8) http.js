// конструктор http сервера
let server = new http.Server();  // => EventEmitter

server.listen(port: number, host?: string);

// событие запроса
server.on('request', (req, res) => {

    res.end("Привет мир");
});

// http.Server наследует так:
http.Server -> net.Server -> events.EventEmitter
