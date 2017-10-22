/*** <<< Number.prototype >>> ***/

// Метод toString() возвращает строковое
// представление указанного объекта Number
Number.prototype.toString(radix?: number) // => string

// Метод toFixed() форматирует число,
// используя запись с фиксированной запятой
Number.prototype.toFixed(digits: number) // => string

// Метод toLocaleString() возвращает строку
// с языко-зависимым представлением числа
Number.prototype.toLocaleString() // => string



/*** <<< СТАТИЧЕСКИЕ СВОЙСТВА >>> ***/
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER



/*** <<< СТАТИЧЕСКИЕ ФУНКЦИИ >>> ***/
Number.isFinite(testValue: ?)
Number.isInteger(testValue: ?)
Number.isNaN(testValue: ?)
Number.isSafeInteger(testValue: ?)
Number.parseFloat(string: string)
Number.parseInt(string: string, radix?: number)



/*** <<< ГЛОБАЛЬНЫЕ ФУНКЦИИ >>> ***/

// Функция isNaN() определяет является ли литерал
// или переменная не числовым значением (NaN) или нет
isNaN(value: number) // => bool

// Глобальная isFinite() функция определяет, является ли п
// ереданное значение конечным числом. Если необходимо,
// параметр сначала преобразуется в число
isFinite(value: number) // => bool

// Функция parseInt() принимает строку в качестве аргумента и возвращает
// целое число в соответствии с указанным основанием системы счисления
parseInt(string: string, radix: number) // => number

// Функция parseFloat() принимает строку в качестве аргумента
// и возвращает десятичное число (число с плавающей точкой)
parseFloat(string: string) // => number
