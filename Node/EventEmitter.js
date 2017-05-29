const EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter();

// Зарегистрировать обработчик события event, который, получит данные
// data, переданные в момент emitter.emit()
emitter.on('event', data => { });  // => emitter

// Зарегистрировать "одноразовый" обработчик события. При втором возникновении
// события обработчик сначала будет удален, затем вызовется событие
emitter.once('event', data => { });

// Возбудить событие event и передать данные [1, 2, 3] в соответствующий
// обработчик. Возвращает true, если есть обработчик собития event
emitter.emit('event', [1, 2, 3]);  // => boolean

// То же самое, что и emitter.on()
emitter.addListener('event', data => { })

// Удалить обработчик с события event
emitter.removeListener('event', callback);

// Возвращает копию массива обработчиков события event
emitter.listeners('event');