var obj = {};

// Синтаксис дескриптора:
var propertyDescriptor = {
	value: 'some value',
	configurable: true,
	writable: true,
	enumerable: true
};

var propertyDescriptorWithGetSet = {
	get: function() {
		return 'some value';
	},
	configurable: true,
	set: function(val) {
		// some code //
	},
	enumerable: true
};




/*** <<< Object.prototype >>> ***/

// Метод valueOf() возвращает примитивное
// значение указанного объекта.
Object.prototype.valueOf()  // => number

// Метод toString() возвращает строку,
// представляющую объект.
Object.prototype.toString()  // => string

//!!! -- два метода выше также присутствуют во многих других объектах, которые переопределяют данные методы




/*** <<< СТАТИЧЕСКИЕ ФУНКЦИИ >>> ***/

// Определяет новое или изменяет существующее свойство
// непосредственно на объекте, возвращая этот объект
Object.defineProperty(obj: ?, prop: string, desc: propertyDescriptor)  // => {}

// Определяет новые или изменяет существующие свойства,
// непосредственно на объекте, возвращая этот объект
Object.defineProperties(obj: ?, props: ?)  // => {}

// Метод Object.keys() возвращает массив из собственных
// перечисляемых свойств переданного объекта, в том же порядке,
// в котором они бы обходились циклом for...in
// (разница между циклом и методом в том, что цикл
// перечисляет свойства и из цепочки прототипов)
Object.keys(obj: ?)  // => [string]

// Метод Object.getOwnPropertyNames() возвращает массив со
// всеми свойствами (независимо от того, перечисляемые они или нет),
// найденными непосредственно в переданном объекте
Object.getOwnPropertyNames(obj: ?)  // => [string]

// Метод Object.getOwnPropertyDescriptor() возвращает дескриптор
// свойства для собственного свойства (то есть такого, которое
// находится непосредственно в объекте, а не получено через
// цепочку прототипов) переданного объекта
Object.getOwnPropertyDescriptor(obj: ?, prop: string)  // => {}

// Мктод Object.getPrototypeOf() возвращает внутреннее свойство
// [[Prototype]] объекта obj. То есть: (obj.__proto__)
Object.getPrototypeOf(obj: ?)  // => {}

// Метод Object.setPrototypeOf() устанавливает прототип [[Prototype]] для объекта obj.
// То есть: obj.__proto__ = prototype. Prototype в аргументе функции может быть null.
Object.setPrototypeOf(obj: ?, prototype: ?)  // => {}

// Метод Object.create() создаёт новый объект с
// указанными объектом прототипа и свойствами.
// Можно передать null.
Object.create(proto: ?)  // => {}

// Метод Object.preventExtensions() предотвращает
// добавление новых свойств к объекту (то есть,
// предотвращает расширение этого объекта в будущем)
// Возаращает это объект
Object.preventExtensions(obj: ?)  // => {}

// Метод Object.seal() запечатывает объект, предотвращая
// добавление новых свойств к объекту и делая все существующие с
// войства не настраиваемыми. Значения представленных свойств
// всё ещё могут изменяться, поскольку они остаются записываемыми
// Возвращает этот объект
Object.seal(obj: ?)  // => {}

// Метод Object.freeze() замораживает объект: это значит,
// что он предотвращает добавление новых свойств к объекту,
// удаление старых свойств из объекта и изменение существующих
// свойств или значения их атрибутов перечисляемости,
// настраиваемости и записываемости. В сущности, объект
// становится эффективно неизменным.
// Метод возвращает замороженный объект.
Object.freeze(obj: ?)  // => {}

// Метод Object.isExtensible() определяет, является ли о
// бъект расширяемым (то есть, можно ли к нему добавлять новые свойства).
Object.isExtensible(obj: ?)  // => boolean

// Метод Object.isSealed() определяет,
// является ли объект запечатанным.
Object.isSealed(obj: ?)  // => boolean

// Метод Object.isFrozen() определяет,
// был ли объект заморожен.
Object.isFrozen(obj: ?)  // => boolean

// Проверяет, являются ли два значения "абсолютно" одинаковыми значениями
Object.is(value1: ?, value2: ?)  // => boolean

// Используется для копирования значений всех собственных перечисляемых
// свойств из одного или более исходных объектов в целевой объект. После
// копирования он возвращает целевой объект.
Object.assign(target: ?, source: ?, source ?: ?)  // => object

// Возвращает массив всех символьных свойств
Object.getOwnPropertySymbols(obj: ?)  // => [Symbol]



/*** <<< Object.prototype >>> ***/

// Метод hasOwnProperty() возвращает логическое значение,
// указывающее, содержит ли объект указанное свойство.
// Этот метод не производит поиск в прототипе объекта, в
// отличии от цикла for in
Object.prototype.hasOwnProperty(prop: string)  // => boolean

// Метод isPrototypeOf() проверяет, входит ли объект в цепочку прототипов другого объекта.
// Метод isPrototypeOf() отличается от оператора instanceof.
// Выражение "object instanceof AFunction" проверяет, присутствует ли в цепочке прототипов
// объекта object объект AFunction.prototype, а не сам объект AFunction.
Object.prototype.isPrototypeOf(obj: ?)  // => boolean

// Метод propertyIsEnumerable() возвращает логическое значение,
// указывающее, является ли указанное свойство перечисляемым.
Object.prototype.propertyIsEnumerable(prop: string)  // => boolean
