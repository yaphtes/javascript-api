const fs = require('fs');

// Чтение директории синхронно
fs.readdirSync(path)  // => [string]
// PS.: Все методы имеют свои соответствующие синхронные аналоги


// Чтение директории асинхронно
fs.readdir(path, cb)  // => undefined
// Сигнатура cb: (err, files) => { ... }

// Чтение файла
fs.readFile(filename, encoding?, cb)  // => undefined
// Сигнатура cb: (err, buffer) => { ... }

// Запись файла
fs.writeFile(filename, data, cb)  // => undefined
// Сигнатура cb: (err) => { ... }

// Добавить содержимое в файл
fs.appendFile(filename, data, options?, cb)  // => undefined
// Сигнатура cb: (err) => { ... }
// Сигнатура options: { encoding: string, mode: number|string, flag: string }

// Наблюдать за файлом (можно и за деррикторией)
let watcher = fs.watch(filename, listener?) // => FSWatcher
// Сигнатура cb: (event, filename) => { .. }

// Не забыть обработать ошибку при наблюдении
watcher.on('error', cb)
// Сигнатура cb: (code, signal) => { ... }


// Читамый поток
let input = fs.createReadStream(path, options)  // => ReadStream

// Записываемый пеоток
let output = fs.createWriteStream(path, options)  // => WriteStream

// Duplex поток
input.pipe(output, options)  // Duplex

