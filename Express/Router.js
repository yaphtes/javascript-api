// Methods

// Слушает любые HTTP VERBS
router.all(path, [callback, ...] callback)

// TODO: попробовать данный метод на практике
// Это middleware. Вызывает calback с аргументами (req, res, next, value), где value - значение параметра name.
// Как я понимаю, все параметры, объявленные через двоеточие в маршруте, складываются в некий стек.
// Например для router.get('/user/:id', ...) - мы можем написать router.param(id, (req, res, next, id) => { ... })
router.param(name, callback)

// Возвращает экземпляр route для пути path, с помощью которого можно обрабатывать HTTP VERBS
// Используется, чтобы не дублировать path, например для REST API
router.route(path)

// Монтирует middleware или наш собственный callback для данного path.
// callbacks выполняются, когда в запросу соответствует указанный path.
router.use([path], [function, ...] function)
