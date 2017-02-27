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




/*** <<< СТАТИЧЕСКИЕ ФУНКЦИИ >>> ***/
/** Объект Math **/

// Округляет число вниз
Math.floor(number)  // => number

// Округляет число вверх
Math.ceil(number)  // => number

// Округляет число до ближайшего целого
Math.round(number)  // => number

// Возвращает квадратный корень числа
Math.sqrt(number)  // => number

// Возвращает натуральный (по основанию e) логарифм числа
Math.log(number)  // => number

// Возвращает основание, возведённое в степень показателя
Math.pow(number, number)  // => number

// Возвращает абсолютное значение числа
Math.abs(number)  // => number

// Возвращает ex, где e – основание натуральных логарифмов
Math.exp(number)  // => number

// Возвращает наибольший из списка аргументов
Math.max(number, number)  // => number

// Возвращает наименьший из списка аргументов
Math.min(number, number)  // => number

// Возвращает псевдо-случайное число в интервале [0,1) – то есть между 0(включительно)
// и 1(не включая). Генератор случайных чисел инициализуется текущим временем
Math.random()  // => number
