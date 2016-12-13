// Свойства экземпляров объекта String

// Возвращает длину строки
str.length  // => number


/*** <<< String.prototype >>> ***/

{	// Поиск и замена

	// Возвращают указанный символ из строки
	String.prototype.charAt(i: number)  // => string
	str[i: number]  // => string

	// Возвращает индекс первого вхождения char в str, начиная с from,
	// если значение не найдено, возвращает -1
	String.prototype.indexOf(char: string, from?: number)  // => number

	// Проверяет начинается ли строка с символов другой строки
	String.prototype.startsWith(searchString: string, position?: number)  // => bool

	// Проверяет заканчивается ли строка на символы другой строки
	String.prototype.endsWith(searchString: string, position?: number)  // => bool

	// Метод match() возвращает получившиеся
	// совпадения при сопоставлении строки с регулярным выражением
	String.prototype.match(pattern: RegExp) // => [string]

	// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями
	// с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным
	// выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении
	String.prototype.replace(pattern: string|RegExp, replacement: string)  // => string

	// Выполняет поиск подстроки по заданному шаблону
	String.prototype.search(pattern: RegExp)  // => number
}


{	// Взятие подстроки

	// Возвращает length количество символов, начиная с позиции from
	String.prototype.substr(from: number, length?: number)  // => number

	// Возвращает подстроку между двумя индексами,
	// или от одного индекса и до конца строки
	String.prototype.substring(from: number, to?: number)  // => number

	// Возвращает подстроку между двумя индексами,
	// или от одного индекса и до конца строки.
	// В отличии от str.substring(), умеет обрабатывать отрица-
	// тельные аргументы
	String.prototype.slice(from: number, to?: number)  // => number
}


{	// Изменение строки

	// Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
	String.prototype.concat(other: string)  // => string

	// Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами
	// в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный
	// пробел и прочие) и все символы конца строки (LF, CR и прочие).
	String.prototype.trim()  // => string

	// Метод repeat() конструирует и возвращает новую строку, содержащую
	// указанное количество соединённых вместе копий строки, на которой он был вызван
	String.prototype.repeat(count: number)  // => string

	// Методы смены регистра
	String.prototype.toLocaleLowerCase()  // => string
	String.prototype.toLocaleUpperCase()  // => string
	String.prototype.toUpperCase()  // => string
	String.prototype.toLowerCase()  // => string
}


{	// Прочие полезные методы

	// Метод localeCompare() возвращает число, указывающее, должна ли
	// данная строка находится до, после или в том же самом месте, что и
	// строка, переданная через параметр, при сортировке этих строк.
	// Возвращает: -1 если str < other; 0 если str == other; 1 если str > other
	String.prototype.localeCompare(other: string)  // => number

	// Разбивает объект str на массив строк путём разделения строки указанным шаблоном.
	String.prototype.split(pattern?: string|RegExp, limit?: number)  // => [string]
}


{	// Работа с unicode и utf

	// Статический метод String.fromCharCode() возвращает строку,
	// созданную из указанной последовательности значений Юникода.
	String.fromCharCode(code: number)  // => string

	// Статический метод String.fromCodePoint() возвращает
	// строку, созданную из указанной последовательности кодовых точек
	String.fromCodePoint(point: number, point?: number)  // => string

	// Метод charCodeAt() возвращает числовое значение Юникода
	// для символа по указанному индексу
	String.prototype.charCodeAt(i: number)  // => number (unicode)

	// Метод codePointAt() возвращает неотрицательно
	// целое число, являющееся закодированным в UTF-16 значением кодовой точки.
	String.prototype.codePointAt(pos: number)  // => number (utf-16)
}
