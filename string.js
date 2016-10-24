var str = 'string';

// Свойства экземпляров объекта String

// Возвращает длину строки
str.length  // => number




/*** <<< String.prototype >>> ***/

// Возвращают указанный символ из строки
String.prototype.charAt(i: number)  // => string
str[i: number]  // => string

// Возвращают значение строки, на которой он был вызван,
// преобразованное в соответствующий регистр
String.prototype.toUpperCase()  // => string
String.prototype.toLowerCase()  // => string

// Возвращает индекс первого вхождения char в str, начиная с from,
// если значение не найдено, возвращает -1
String.prototype.indexOf(char: string, from?: number)  // => number

// Взятие подстроки
{
	// Возвращает length количество символов, начиная с позиции from
	String.prototype.substr(from: number, length?: number)  // => number

	// Возвращает подстроку строки между двумя индексами,
	// или от одного индекса и до конца строки
	String.prototype.substring(from: number, to?: number)  // => number

	// Возвращает подстроку строки между двумя индексами,
	// или от одного индекса и до конца строки.
	// В отличии от str.substring(), умеет обрабатывать отрица-
	// тельные аргументы
	String.prototype.slice(from: number, to?: number)  // => number
}

// Работа с Unicode
{
	// Статический метод String.fromCharCode() возвращает строку,
	// созданную из указанной последовательности значений Юникода.
	String.fromCharCode(code: number)  // => string

	// Метод charCodeAt() возвращает числовое значение Юникода
	// для символа по указанному индексу
	String.prototype.charCodeAt(i: number)  // => number
}

// Метод localeCompare() возвращает число, указывающее, должна ли
// данная строка находится до, после или в том же самом месте, что и
// строка, переданная через параметр, при сортировке этих строк.
// Возвращает: -1 если str < other; 0 если str == other; 1 если str > other
String.prototype.localeCompare(other: string)  // => number

// Разбивает объект str на массив строк путём разделения строки указанным шаблоном.
String.prototype.split(pattern?: string|RegExp, limit?: number)  // => [string]
