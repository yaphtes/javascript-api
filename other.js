// Вызов функции после указанной задержки.
// Функция асинхронна. Возвращает идентификатора,
// кторый в будущем можно использовать для очистки таймера.
window.setTimeout(f: fn(), ms: number)  // => number

// Отменяет ранее заданный таймер. Принимает идентификатор
window.clearTimeout(timeout: number)  // => undefined

// Повторять вызов функции каждые с фиксированной задержкой.
// Функция асинхронна. Возвращает идентификатора,
// кторый в будущем можно использовать для очистки таймера.
window.setInterval(f: fn(), ms: number)  // => number

// Отменяет ранее заданный таймер. Принимает идентификатор
window.clearInterval(interval: number)  // => undefined

JSON.parse(json: string, reviver?: fn(key: string, value: ?))

JSON.stringify(value: ?, replacer?: fn(key: string, value: ?), space?: string|number)
