let xhr = new XMLHttpRequest();


// События
readystatechange // событие, происходящее несколько раз в процессе ajax-запроса, каждый раз надо проверять xhr.readyState
loadstart // запрос начат
progress // браузер получил очередной пакет данных, можно прочитать текущие полученные данные в xhr.responseText {
	event.loaded  // сколько скачано байт
	event.total  // общий размер скачиваемых данных
// }
abort // запрос был отменен вызовом xhr.abort()
error // произошла ошибка
load // запрос был успешно (без ошибок) завершен
loadend // запрос был завершен (успешно или неуспешно)
timeout // истекло врема асинхронного запроса

// Конфигурация запроса
xhr.open(method, url, async?, user?, password?)

// Отослать запрос
// data - строка (всегда ли?)
xhr.send(data)

// Прервать запрос
xhr.abort()

// Код ответа сервера
xhr.status // => number

// Строка ответа сервера
xhr.statusText // => string

// Текст ответа сервера, работает если xhr.status == 200
xhr.responseText // => string

// Текущее состояние запроса
// 0 - начальное состояние
// 1 - вызван xhr.open
// 2 - получены заголовки
// 3 - загружается тело (получен очередной пакет данных)
// 4 - запрос завершен
xhr.readyState // => number

// Устанавливает заголовок (поставленный заголовок нельзя снять, повторный вызов лишь добавит информацию к заголовку)
xhr.setRequestHeader(header, value)

// Возвращает значение заголовка, кроме Set-Cookie и Set-Cookie2
xhr.getResponseHeader(header) // => string

// Возвращает все заголовки ответа, кроме Set-Cookie и Set-Cookie2
xhr.getAllResponseHeaders() // => string

// пара get и set, максимальная продолжительность асинхронного запроса, в конце вызывается событие timeout
xhr.timeout // => number



// Шаблон типичного запроса (предварительно нужно позаботиться о наполнении data)
var xhr = new XMLHttpRequest();

xhr.send(data);

xhr.onreadystatechange = function() {
	if (this.readyState != 4) return;

	// по окончании запроса доступны:
	// status, statusText
	// responseText, responseXML (при content-type: text/xml)

	if (this.status != 200) {
		// обработать ошибку
		alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'));
		return;
	}

	// получить результат из this.responseText
}
