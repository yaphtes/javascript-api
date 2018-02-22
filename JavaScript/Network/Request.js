// Создает объект запроса
const request = new Request();


/*** <<< Свойства экземпляров >>> ***/

// http - глагол
requset.method

// url
requset.url

// заголовки
request.headers

// Контекст (напр. audio, image, iframe и т.д.)
request.context

// Ссылющийся (напр. client)
request.referrer

// Политика ссылающегося (напр. no-referrer)
request.referrerPolicy

// Режим (напр. cors, no-cors, same-origin, navigate)
request.mode

// Полномочия (напр. omit, same-origin)
request.credentials

// Режим обработки перенаправления (follow, error или manual)
request.redirect

// Значение целостности (напр. sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=)
// Подробнее https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
request.integrity

// Режим кеширования (напр. default, reload, no-cache)
request.cache




/*** <<< Прототип >>> ***/

// Создать текущую копию объекта request
Request.prototype.clone()





// https://developer.mozilla.org/en-US/docs/Web/API/Body
// Request имплементирует интерфейс Body, поэтому в нем доступны слеюующие свойства и методы
/**** Body ****/


/* Сойства */

// Геттер для отображения ReadableStrean body контента
// Подробнее про ReadableStream  в браузерах: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
request.body

// Есть ли тело в ответе
request.bodyUsed


/* Прототип */

// Промисы, который репрезентуют соответствующие типы тел запроса
request.arrayBuffer()
request.blob()
request.formData()
request.json()
request.text()