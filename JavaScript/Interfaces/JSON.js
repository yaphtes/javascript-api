// Метод JSON.parse() разбирает строку JSON, возможно с
// преобразованием получаемого в процессе разбора значения.
JSON.parse(json: string, reviver ?: fn(key: string, value: ?))

// Метод JSON.stringify() преобразует значение JavaScript в
// строку JSON, возможно с заменой значений, если указана
// функция замены, или с включением только определённых свойств,
// если указан массив замены.
JSON.stringify(value: ?, replacer ?: fn(key: string, value: ?), space ?: string | number)

