// 1) все, что положим в объект exports, вернется как резальтат require в другом модуле
// exports - это ссылка на module.exports: module.exports = exports = this
exports

// Пример:
// 1.js
function User() { ... }
User.prototype.hello = function() { ... };
exports.User = User;

// 2.js
let user = require('./user');
let john = new user.User('john');


// 2) аналог объекта window из браузерного js, обращаться к нему нужно явно
global.user = User;


// 3) подключить и выполнить файл модуля. require('./user') сначала ищет user.js => user.json => user.node =>
// => дирректория user и в дерриктории index.jx (считает его модулем)
require(id: string)  // => объект exports подключаемого модуля


// 4) види модулей: js && json && node && модуль-дирректория(DIR/INDEX)
