let EventEmitter = require('events').EventEmitter;

let server = new EventEmitter;


// Генерирует событие типа event и передает данные data в обработчик
// Если событие было обработано, вернет true
server.emit(event: string[, data: object])  // => boolean

// Вызываются при соотвутствующем server.emit(event: string[, data: object. При том,
// если данные будут переданы, они будут доступны в функции-обработчике (data)
server.on(event: string, fn(data) {})

// Возвращает массив обработчиков, привязанных к указанному событию
server.listeners(event: string)  // => [fn]

// Количество обработчиков, привазанных к эмиттеру, с типом event
EventEmitter.listenerCount(emitter: object, event: string)  // => number


// PS
// 0. Обработчики вызываются в том же порядке, в каком были объвялены

// 1. Есть специальное событие server.emit('error'), если обработчпик не назначен, даст исключение.
// Это мудрое решение, потому что очень-очень многие события в NodeJS сообщают о своих ошибках через server.emit('error')

// 2. В EventEmitter есть встроенные средства по борьбе с утечками памяти. Нужно быть аккуратно с замыканиями.
