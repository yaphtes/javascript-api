util

// красиво вывести любой объек, если у ubj есть метод inspect, то выведится его резальтат (аналог toString)
util.inspect(obj: object[, options: object])

// формытированный вывод
util.format(format[, ...args])
util.format('My %s %d %f', 'string', 123, {test: 'obj'});

util.inherits(constructor: ?, superConstructor: ?)
