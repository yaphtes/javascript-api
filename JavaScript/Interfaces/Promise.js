// Промис – это специальный объект, который хранит своё состояние, текущий результат (если есть) и коллбэки.
//
// При создании new Promise((resolve, reject) => ...) автоматически запускается функция-аргумент,
// которая должна вызвать resolve(result) при успешном выполнении и reject(error) – при ошибке.
//
// Аргумент resolve/reject (только первый, остальные игнорируются) передаётся обработчикам на этом промисе.
// Т.н. resolve(value) или reject(value) передаст в следующий next value
//
// Обработчики назначаются вызовом .then /catch.
//
// Для передачи результата от одного обработчика к другому используется чейнинг.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('some value'), 1000);
});

promise
    .then(result => alert('Результат: ' + result));  // выведет 'some value'





// Получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт,
// пока все переданные промисы завершатся, и переходит в состояние «выполнено» с массивом их результатов.
// Если какой-то из промисов завершился с ошибкой, то результатом Promise.all будет эта ошибка. При этом остальные промисы игнорируются.
Promise.all(iterable)

Promise.all([
    httpGet('/article/promise/user.json'), //##### httpGet - функция, которая возвращает промис #####
    httpGet('/article/promise/guest.json')
]).then(results => {
    alert(results);
});



// Вызов Promise.race, как и Promise.all, получает итерируемый объект с промисами,
// которые нужно выполнить, и возвращает новый промис. Но, в отличие от Promise.all,
// результатом будет только первый успешно выполнившийся промис из списка.Остальные игнорируются.
Promise.race(iterable)

Promise.race([
    httpGet('/article/promise/user.json'),
    httpGet('/article/promise/guest.json')
]).then(firstResult => {
    firstResult = JSON.parse(firstResult);
    alert(firstResult.name); // iliakan или guest, смотря что загрузится раньше
});



// Вызов Promise.resolve(value) создаёт успешно выполнившийся промис с результатом value.
// Он аналогичен конструкции: new Promise(resolve => resolve(value)). Promise.resolve используют,
// когда хотят построить асинхронную цепочку, и начальный результат уже есть.
Promise.resolve(value)

Promise.resolve(window.location) // начать с этого значения
    .then(httpGet) // вызвать для него httpGet
    .then(alert) // и вывести результат



// Аналогично Promise.resolve(value) создаёт уже выполнившийся промис, но не с успешным результатом, а с ошибкой error.
// Метод Promise.reject используется очень редко, гораздо реже чем resolve, потому что ошибка возникает обычно не в начале цепочки, а в процессе её выполнения.
Promise.reject(error)

Promise.reject(new Error("..."))
    .catch(alert) // Error: ...





// PS
// Promise после reject/resolve – неизменны
//
// Если очередной then вернул промис, то далее по цепочке будет передан не сам этот промис, а его результат.
//
// При возникновении ошибки – она отправляется в ближайший обработчик onRejected.
//
// then(null, func) - то же самое, что и catch(func)
//
// Для того, чтобы результат обработчика передать следующей функции, .then создаёт новый промис и возвращает его.