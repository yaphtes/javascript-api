const http = require('http');

http.createServer((req, res) => {

}).listen(port, cb);

// или ...

const server = http.createServer();

server.on('request', (res, res) => { ... });

server.listen(port, cb);


/*** <<< Методы server (http.Server.prototype) >>> ***/

// Запускает сервер
server.listen(prot, cb)  // => server



/*** <<< События server >>> ***/

// Пришел запрос
server.on('request', (req, res) => { });



/*** <<< Объекты req и res (http.clientRequest и http.serverResponse) >>> ***/

