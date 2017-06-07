// Метод JSON.parse() разбирает строку JSON, возможно с
// преобразованием получаемого в процессе разбора значения.
JSON.parse(string, cb?)  // => object
// Сигнатура cb: (key, value) => { ... }


// строку, возможно с заменой значений, если указана
// функция замены, или с включением только определённых свойств,
// если указан массив замены.
// replacer - функция или массив;
// space - число или строка;
JSON.stringify(object, replacer?, space?)  // => string
// Сигнатура функции replacer: (key, value) => { ... }

