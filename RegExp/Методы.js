/*** Рецепты ***/


{  // Поиск одного совпадения

	// Найти позицию первого совпадения
	str.search(pattern: RegExp)

	// Найти само совпадение
	str.match(pattern: RegExp)  // без флага g

	// Есть ли хоть одно совпадение
	regexp.test(input: string)  /* или */  str.search(pattern: RegExp) != -1

	// Найти совпадение с нужной позиции
	regexp.exec(input: string)
	regexp.lastIndex = value;  // ставим начальную позицию
}


{  // Поиск всех совпадений

	// Найти массив совпадений
	str.match(pattern: RegExp)  // с флагом g

	// Получить все совпадения с подробой информацией о каждом
	regexp.exec(str)  // в цикле с флагом g
}


{  // Поиск и замена

	//Замена на другую строку или результат функции
	str.replace(pattern?: string|RegExp, replacement: str|func)
}


{  // Для разбивки на массив

	str.split(pattern?: string|RegExp, limit?: number)
}
/*** Рецепты конец ***/



/*** <<< String.prototype >>> ***/

// Возвращает индекс первого совпадения или -1
String.prototype.search(pattern: RegExp)  // => number

{  // String.prototype.match()

	// Без флага /g/ - только первое совпадение и доп свойства,
	// Скобки пораждают дополнительные элементы
	String.prototype.match(pattern: RegExp)  // => [string] либо null
	// result[0] и т.д. - результат
	// result.index - позиция
	// result.input - входная строка

	// C флагом /g/ - массив всех совпадений,
	// скобки не пораждают новых элементов,
	// дополнительных свойств также нет
	String.prototype.match(pattern: RegExp)  // => [string] либо null
}


{  // String.prototype.replace()

	// Заменяет совпадение (строка или regex без /g/), либо совпадения (/g/) на заданный заменитель.
	// Заменитель может быть строкой, спец. символом или функцией. Функция будет вызываться для каждого совпадения.
	String.prototype.replace(pattern: string|RegExp, replacement: string)  // => [string]
	// Таблица спец. символов:
	// $$      Вставляет "$".
	// $&      Вставляет найденную строку.
	// $`      Вставляет часть строки до совпадения.
	// $'      Вставляет часть строки после совпадения.
	// $n      где n -- цифра или двузначное число, обозначает n-ю по счёту скобку.

	// Функция для замены:
	function replacement(match, p1, p2, offset, string) {
		// match - найденная строка.
		// p1, p2, pn - аргументы для содержимого скобок.
		// offset - позиция найденной строки.
		// string - исходная строка.
	}
}

// Разбить строку на массив по шаблону или строке
String.prototype.split(pattern?: string|RegExp, limit?: number)  // => [string]



/*** <<< RegExp.prototype >>> ***/

{  // RegExp.prototype.exec()

	// Без флага /g/ - возвращает первое совпадение, полный аналог вызова str.match(reg)
	RegExp.prototype.exec(input: string)  // => [string] либо null

	// C флагом /g/ - возвращает первое совпадение и запоминает его позицию в свойстве regex.lastIndex.
	// Последующий поиск начинается уже с него. Если совпадений больше нет, то сбрасывает regex.lastIndex в ноль.
	// Если regex.lastIndex поставить вручную, то метод regex.exec() будет искать с нужной позиции.
	RegExp.prototype.exec(input: string)  // => [string] либо null
	// result[0] и т.д. - результат
	// result.index - позиция
	// result.input - входная строка
}


// Проверяет, есть ли хоть одно сопоставление шаблону
RegExp.prototype.test(input: string)  // => bool
