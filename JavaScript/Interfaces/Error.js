// Создает объект ошибки, затем оператор throw пробрасывает исключение, с данным объектом ошибки
throw new Error(message)

// Нестандартная функция, получает текущий stack trace и записывает его в this объекта new Error.
// fun - функция, до которой будет собираться stack trace
Error.captureStackTrace(this, fn)

// Имя ошибка
Error.prototype.name

// Сообщение ошибки
Error.prototype.message

// Стек вызовов, доступен не везде
Error.prototype.stack
