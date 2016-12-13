// Свойства экземпляров объекта String

// Длина строки
str.length // => number


/*** <<< String.prototype >>> ***/

{ // Поиск и замена

	// Возвращают указанный символ из строки
	String.prototype.charAt(i: number) // => string
	str[i: number] // => string

	// Возвращает индекс первого вхождения подстроки или -1
	String.prototype.indexOf(char: string, from ? : number) // => number

	// Проверяет, находится ли одна строка внутри другой
	String.prototype.includes(searchString: string, position ? : number) // => bool

	// Проверяет начинается ли строка с символов другой строки
	String.prototype.startsWith(searchString: string, position ? : number) // => bool

	// Проверяет заканчивается ли строка на символы другой строки
	String.prototype.endsWith(searchString: string, position ? : number) // => bool

	// Метод match() возвращает получившиеся
	// совпадения при сопоставлении строки с регулярным выражением
	String.prototype.match(pattern: RegExp) // => [string]

	// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями
	// с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным
	// выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
	// Если pattern = строка, то заменяет только первое совпадение.
	String.prototype.replace(pattern: string | RegExp, replacement: string) // => string

	// Выполняет поиск подстроки по заданному шаблону
	String.prototype.search(pattern: RegExp) // => number
}


{ // Взятие подстроки

	// Возвращает length символов, начиная с позиции from
	String.prototype.substr(from: number, length ? : number) // => number

	// Возвращает подстроку между двумя индексами,
	// или от одного индекса и до конца строки
	String.prototype.substring(from: number, to ? : number) // => number

	// Возвращает подстроку между двумя индексами,
	// или от одного индекса и до конца строки.
	// В отличии от str.substring(), умеет обрабатывать отрица-
	// тельные аргументы
	String.prototype.slice(from: number, to ? : number) // => number
}


{ // Изменение строки

	// Конкатинирует строки, возвращает результат
	String.prototype.concat(other: string) // => string

	// Удаляет пробельные символы с начала и конца строки.
	String.prototype.trim() // => string

	// Конструирует и возвращает новую строку, содержащую
	// указанное количество соединённых вместе копий строки
	String.prototype.repeat(count: number) // => string

	// Методы смены регистра
	String.prototype.toLowerCase() // => string
	String.prototype.toUpperCase() // => string
	String.prototype.toLocaleLowerCase() // => string
	String.prototype.toLocaleUpperCase() // => string
}


{ // Прочие полезные методы

	// Метод localeCompare() возвращает число, указывающее, должна ли
	// данная строка находится до, после или в том же самом месте, что и
	// строка, переданная через параметр, при сортировке этих строк.
	// Возвращает: -1 если str < other; 0 если str == other; 1 если str > other
	String.prototype.localeCompare(other: string) // => number

	// Разбивает строку на массив строк путём разделения строки указанным шаблоном
	String.prototype.split(pattern ? : string | RegExp, limit ? : number) // => [string]
}


{ // Работа с unicode и utf

	// Возвращает форму нормализации Юникода данной строки
	String.prototype.normalize(form: string) // => string

	// Возвращает строку, созданную из указанной последовательности значений Юникода (unicode)
	String.fromCharCode(code: number) // => string

	// Возвращает строку, созданную из указанной последовательности кодовых точек (utf-16)
	String.fromCodePoint(point: number, point ? : number) // => string

	// Возвращает числовое значение Юникода для символа по указанному индексу
	String.prototype.charCodeAt(i: number) // => number (unicode)

	// Возвращает неотрицательно целое число, являющееся закодированным в UTF-16 значением кодовой точки
	String.prototype.codePointAt(pos: number) // => number (utf-16)
}

{ // Шаблонные строки

	// ...
	String.raw(template: [string], substitutions: ? , templateString : ? )
}


// escape-последовательности
// Код       Вывод
//
// \0        нулевой символ (символ NUL)
// \'        одинарная кавычка
// \"        двойная кавычка
// \\        обратный слэш
// \n        новая строка
// \r        возврат каретки
// \v        вертикальная табуляция
// \t        табуляция
// \b        забой
// \f        подача страницы
// \uXXXX    кодовая точка Юникода
// \xXX      символ из кодировки Latin-1
