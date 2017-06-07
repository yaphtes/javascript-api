// Полезные заголовки:
let userfulHeaders = {
    'Content-Type': 'x-www-form-urlencoded',
    'Content-Type': 'application/json',
    'Content-Type': 'application/form-data',
    'Content-Type': 'application/octet-stream',
    'X-Requested-With': 'XMLHttpRequest'
}

// Изначально создается пустой объект с заголовками
let headers = new Headers()


/*** <<< Headers.prototype >>> ***/

Headers.prototype.append(name, value)  // => undefined

Headers.prototype.delete(name)  // => undefined

Headers.prototype.entries()  // => iterable: [key, value]

Headers.prototype.forEach(cb)  // => undedined
// Сигнатура cb: (value, name, headers)

Headers.prototype.get(name)  // => string

Headers.prototype.has(name)  // => boolean

Headers.prototype.keys()  // => iterable: [key]

Headers.prototype.set(name, value)  // => undefined

Headers.prototype.values()  // => iterable: [value]