// APP SETTINGS TABLE (http://expressjs.com/ru/4x/api.html#app.settings.table)


// Properties

// Объект обладающий свойствами, которые являются локальными переменными экземпляря приложения
// Свойства существуют на протяжении всей жизни приложения, в отличии от res.locals, где свойства
// живут только во время запроса.
app.locals

// Содержит один или несколько шаблонов путей, где было примонтировано sub-приложение с помощью app.use()
// Например: app.use('/admin', admin), где admin = express(); Потом слушаем запросы так: admin.get(...)
app.mountpath  // => '/admin'



// Events

// Вызывает callback, когда монтируется sub-приложение (admin)).
// parent - ссылка на родительское приложение.
admin.on('mount', callback(parent))



// Methods

// Слушает любые HTTP VERBS
app.all(path, callback [, callback ...])

// Слушает HTTP DELETE VERB.
app.delete(path, callback [, callback ...])

// Включает boolean-параметр из APP SETTINGS TABLE. app.enagle('foo') то же самое, что и app.set('foo', true);
app.enable(name)

// Проверяет, включен ли параметр из APP SETTINGS TABLE
app.enabled(name)

// Выключает boolean-параметр из APP SETTINGS TABLE. app.disable('foo') то же самое, что и app.set('foo', false);
app.disable(name)

// Проверяет, выключен ли параметр из APP SETTINGS TABLE
app.disabled(name)

// активирует template engine, переданный как calback, для расширения ext
app.engine(ext, callback)

// Возвращает значение name из APP SETTINGS TABLE
app.get(name)

// Слушает HTTP GET VERB.
app.get(path, callback [, callback ...])

// Запускает UNIX соккет и прослушивает соединение по пути path
app.listen(path, [callback])

// Запускает UNIX соккет и прослушивает соединение по указанным данным
app.listen(port, [hostname], [backlog], [callback])

// Прослушивает соединение по указанному поту, где вместо METHOD нужно указать HTTP VERB
app.METHOD(path, callback [, callback ...])

// TODO: попробовать данный метод на практике
// Это middleware. Вызывает calback с аргументами (req, res, next, value), где value - значение параметра name.
// Как я понимаю, все параметры, объявленные через двоеточие в маршруте, складываются в некий стек всех параметров проекта.
// Например для app.get('/user/:id', ...) - мы можем написать app.param(id, (req, res, next, id) => { ... })
app.param([name], callback)

// Возаращает канонический путь экземпляра приложения (в данном случае app), также можно использовать для sup-приложений.
app.path()

// Слушает HTTP POST VERB.
app.post(path, callback [, callback ...])

// Слушает HTTP PUT VERB.
app.put(path, callback [, callback ...])

// Возвращает обработанное (отрендеренное) HTML-представление с помощью callback (опционально)
// locals - локальные переменные для представления (подставляются в переменные в шаблонизаторе)
// callback(err, html) - когда он нужен? - хз.
app.render(view, [locals], callback)

// Возвращает экземпляр route для пути path, с помощью которого можно обрабатывать HTTP VERBS
// Используется, чтобы не дублировать path, например для REST API
app.route(path)

// Устанавливает параметр name из APP SETTINGS TABLE в значение value
app.set(name, value)

// Монтирует middleware или наш собственный callback для данного path.
// callbacks выполняются, когда в запросу соответствует указанный path
app.use([path,] callback [, callback...])
