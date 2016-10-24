var arr = [1, 'a'];
var str = 'string';
/*** <<< МЕТОДЫ И СВОЙСТВА>>> ***/

// Свойство length представляется беззнаковым 32-х битным
// целым числом, указывающим количество элементов в массиве
arr.length  // => number

// Добавление, удаление элементов массива
{
	// Добавляет один или более элементов в конец
	// массива и возвращает новую длину массива
	arr.push(newelt: ?)  // => number

	// Метод pop() удаляет последний элемент
	// из массива и возвращает его значение
	arr.pop()  // => ?

	// Метод unshift() добавляет один или более элементов в
	// начало массива и возвращает новую длину массива
	arr.unshift(newelt: ?)  // => number

	// Метод shift() удаляет первый элемент
	// из массива ивозвращает его значение
	arr.shift()  // => ?

	// Метод splice() изменяет содержимое массива, удаляя
	// существующие элементы и/или добавляя новые.
	// Возвращает массив, содержащий удаленные элементы
	arr.splice(pos: number, amount: number, newelt?: ?)  // => [?]
}

// Разбивает str на массив строк путём разделения строки указанным шаблоном
str.split(pattern?: string|RegExp, limit?: number)  // => [string]

// Метод join() объединяет все элементы массива в строку.
arr.join(separator?: string)  // => string

// Метод slice() возвращает поверхностную копию части массива в новый объект массива
arr.slice(from?: number, to?: number)  // => [?]

// На месте сортирует элементы массива и возвращает отсортированный массив
arr.sort(compare?: fn(a: ?, b: ?) : number)  // => [?]

// На месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний — первым
// Возвращает массив
arr.reverse()  // => [?]

// Метод concat() возвращает новый массив, состоящий из массива,
// на котором он был вызван, соединённого с другими массивами и/или
// значениями, переданными в качестве аргументов
// Возвращает новый массив
arr.concat(other: [?])  // => [?]

// Возвращает первый индекс, по которому данный элемент
// может быть найден в массиве или -1, если такого индекса нет
arr.indexOf(elt: ?, from?: number)  // => number

// Возвращает последний индекс, по которому данный элемен
// может быть найден в массиве или -1, если такого индекса нет
arr.lastIndexOf(elt: ?, from?: number)  // => number

// возвращает массив из собственных перечисляемых свойств переданного
// объекта, в том же порядке, в котором они бы обходились циклом for...in
// (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов)
Object.keys(obj: ?)  // => [string]


// Перебиреющие методы
{
	// Метод forEach() выполняет указанную функцию
	// один раз для каждого элемента в массиве
	arr.forEach(f: fn(elt: ?, i: number, array: Array), context?: ?)  // => undefined

	// Метод filter() создаёт новый массив со всеми элементами,
	// прошедшими проверку, задаваемую в передаваемой функции
	// Возвращает новый массив
	arr.filter(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => [?]

	// Метод map() создаёт новый массив с результатом
	// вызова указанной функции для каждого элемента массива
	arr.map(f: fn(elt: ?, i: number, array: Array), context?: ?)  // => [?]

	// Проверяет, удовлетворяют ли все элементы
	// массива условию, заданному в передаваемой функции
	arr.every(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => boolean

	// Проверяет, удовлетворяет ли хоть какой-нибудь элемент
	// массива условию, заданному в передаваемой функции
	arr.some(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => boolean

	// Применяет функцию к аккумулятору и каждому значению
	// массива (слева-направо), сводя его к одному значению
	arr.reduce(combine: fn(sum: ?, elt: ?, i: number, array: Array), init?: ?)  // => number

	// Применяет функцию к аккумулятору и каждому значению
	// массива (справа-налево), сводя его к одному значению
	arr.reduceRight(combine: fn(sum: ?, elt: ?, i: number, array: Array), init?: ?)  // => number
}
