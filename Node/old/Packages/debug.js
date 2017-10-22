// Очень простая утилита для логирования и отладки, просто вместо console.log пишем debug().
// Предварительно нужно указать переменную окружения DEBUG равную аргументы модуля фабрики ('server' или 'server:request') etc


// server.js
const debug = require('debug')('server');
// DEBUG=server node index.js


// request.js
const debug = require('debug')('server:request');
// DEBUG=server:request node index.js
