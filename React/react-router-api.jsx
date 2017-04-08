// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md - документация

// Роутер
<Router />


// Сопоставляет компонент с url
{   <Route />

    path
    // путь используемый в url, если начинается с "/.." то это абсолютный путь

    component
    // единственный компонент, который должен отображаться, когда маршрут соответствует
    // URL - адресу.Он может быть визуализирован родительским компонентом маршрута с
    // this.props.children

    components
    // маршруты могут определять один или несколько именованных компонентов как объект
    // { [name]: компонент }. Они могут отображаться родительским компонентом маршрута
    // с this.props[name]

    getComponent(nextState, callback)
    // то же самое, что и component, но асинхронный, полезный для code splitting

    getComponents(nextState, callback)
    // то же самое, что и components, но асинхронный, полезный для code splitting

    onEnter(nextState, replace, callback?)
    // Called when a route is about to be entered. It provides the next router state
    // and a function to redirect to another path.this will be the route instance that
    // triggered the hook. ###########################################################
    // If callback is listed as a 3rd argument, this hook will run asynchronously, and
    // the transition will block until callback is called

    onChange(prevState, nextState, replace, callback ?)
    // Called on routes when the location changes, but the route itself neither enters
    // or leaves.For example, this will be called when a route's children change, or
    // when the location query changes.It provides the previous router state, the next
    // router state, and a function to redirect to another path.this will be the route
    // instance that triggered the hook. #############################################
    // If callback is listed as a 4th argument, this hook will run asynchronously, and
    // the transition will block until callback is called
}


// Сопоставляет компонент с url
{   <Link />

    to
    // location descriptor или url-строка
    // location descriptor:
    // pathname      url-адрес без строки запроса
    // query(или search)        строка запроса (то, что стоит после знака ?)
    // state         объект данных привязанных к этому местоположению (не понятно как работает)
    // action        один из PUSH, REPLACE, или POP
    // key           уникальный идентификатор

    activeClassName
    // класс, когда ссылка актива

    activeStyle
    // стили, когда ссылка активна

    onClick(event)
    // Пользовательский обработчик

    onlyActiveOnIndex
    // Если true, <Link> будет активен только тогда, когда текущий маршрут точно соответствует
    // указанному маршруту
}


// <IndexLink> подобен <Link>, за исключением того, что он активен только тогда, когда
// текущий маршрут является точно связанным маршрутом. Это эквивалентно <Link> с параметром
// onlyActiveOnIndex={true}
<IndexLink />




// Указывает родительский маршрут по умолчанию, когда посетитель находится по URL-адресу родителя.
<indexRoute />



// Устанавливает перенаправление на другой маршрут для поддержки старых URL-адресов
{   <Redirect />

    from
    // откуда перенаправлять, может быть динамическим

    to
    // куда перенаправлять
}


// <IndexRedirect> позволяет вам перенаправлять URL-адрес родительского маршрута на другой
// маршрут.Они могут использоваться, чтобы позволить дочернему маршруту служить маршрутом
// по умолчанию для его родителя, сохраняя при этом отдельный URL.
{   <IndexRedirect />

    to
    // куда перенаправлять
}



/*** <<< Route Components >>> ***/
// Компонент маршрута визуализируется, когда этот маршрут соответствует URL.Маршрутизатор
// добавит эти свойства в компонент при его визуализации

// Текущее местоположение
props.location // => object
// pathname      url-адрес без строки запроса
// query(или search)        строка запроса (то, что стоит после знака ?)
// state         объект данных привязанных к этому местоположению (не понятно как работает)
// action        один из PUSH, REPLACE, или POP
// key           уникальный идентификатор

// Динамическая часть url-адреса
// Суда входят все параметры (не понятно как работает)
props.params

// Рооут, который отрендерил данный компонент
props.route

// Содержит методы, относящиеся к маршрутизации. Наиболее полезно для императивного
// перехода вокруг приложения
props.router

// Динамическая часть url-адреса. Только та их часть, которую мы непосредственно добавили
props.routeParams