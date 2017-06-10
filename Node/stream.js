const fs = require('fs');

/*** <<< Читаемый поток >>> ***/

// Создает читаемый поток
const readableStream = fs.createReadStream(path, options);
let data = '';

// Подписывается на событие поступления части данных
readableStream.on('data', chunk => data += chunk);

// Подписываемся на событие ошибки
readableStream.on('error', err => console.log(err.message));

// Подписываемся на событие завершения потока (данные полностью пришли)
readableStream.on('end', () => console.log('Поток завершен'));



/*** <<< Записываемый поток >>> ***/

// Создает читаемый поток
const readableStream = fs.createReadStream(path, options);

// Создает записываемый поток
const writableStream = fs.createWriteStream(path, options);

// Подписываемся на события поступления части данных
// В ФОВ записываем chunk в записываемый поток
readableStream.on('data', chunk => writableStream.write(chunk));



/*** <<< Дуплексный поток (канал) >>> ***/

// Интересной особенностью потоков является то, что читаемый поток и записываемый поток
// можно соединить. Собственно мы так делали раньше readableStream.on('data', chunk => writableStream.write(chunk));
// мы это делали вручную, но есть более элегантный способ: использование метода pipe(),
// который есть только у читраемого потока

const readableStream = fs.createReadStream(path, options);
const writableStream = fs.createWriteStream(path, options);

// Метод pipe() работает с читаемым потоком, преобразовывая его в дуплексный.
// Смотрим читаемый поток и записываем его в записываемый поток.
// Подписка на события data и error происходит автоматически.
// Метод можно чейнить.
readableStream.pipe(writableStream, options).pipe( ... );


// Как примерно работает метод pipe() внутри:
class ReadStream {
    pipe(stream) {
        this.on('data', chunk => stream.write(part));
        this.on('error', err => console.log(err));
        return stream;
    }
}

// P.S.: разновидностью дуплексных потоков является трансформируемый поток.
// Суть трансформируемого потока состоит в том, что он берет читамый поток,
// как либо изменяет данные (например сжимает) и пишет в записываемый поток.
// Пример:

const zlib = require('zlib');

const readableStream = fs.createReadStream(path, options);
const writableStream = fs.createWriteStream(path, options);

// Создает трансформируемый поток (поток получает данные, сжимает их и выдает)
const gzip = zlib.createGzip();

// Читает читаемый поток, прогоняет через трансформируемый поток, пишет в записываемый поток
readableStream.pipe(gzip).pipe(writableStream);