{  // Window

	// Вызов функции после указанной задержки.
	// Функция асинхронна. Возвращает идентификатора,
	// кторый в будущем можно использовать для очистки таймера.
	window.setTimeout(f: fn(), ms: number)  // => number

	// Отменяет ранее заданный таймер. Принимает идентификатор
	window.clearTimeout(timeout: number)  // => undefined

	// Повторять вызов функции каждые с фиксированной задержкой.
	// Функция асинхронна. Возвращает идентификатора,
	// кторый в будущем можно использовать для очистки таймера.
	window.setInterval(f: fn(), ms: number)  // => number

	// Отменяет ранее заданный таймер. Принимает идентификатор
	window.clearInterval(interval: number)  // => undefined

	// Кодирование url
	window.encodeURI(uri: string)  // => string
	window.encodeURIComponent(uri: string)  // => string

    // Декодирование url
	window.decodeURI(uri: string)
	window.decodeURIComponent(uri: string)


	{  // window.navigator

        // проверяет включены ли куки
		navigator.cookieEnabled  // => boolean

        // сколько ядер используется
        navigator.hardwareConcurrency  // => number

        // платформа, напр. linux
		navigator.platform  // => string

        // используемый язык
		navigator.language  // => string

        // доступные языки
        navigator.languages  // = > [string]

        // проверяет наличие сети
        navigator.onLine  // => boolean
	}

	{  // document.cookie атрибуты
		// в cooke в качестве значений нельзя использовать пробелы запятые и точки с запятов, поэтому может потребоваться использовать encodeURIComponent() и в последствии decodeURIComponent() соответственно для чтения.
		// пример cookie: 'max-age: 3600; path=/ domain=.example.com secure=true'

		'max-age=число_милисекунд'  // максимальное время жизни
		'path'  // область видимости, по умолчанию доступен на создавшей его странице и страницах текущего каталога, но не выше. например 'path=/' - виден вообще всем страницам текущего домена
		'domain'  // на каких доменах они доступны, по умолчанию куки доступны на страницах с общим происхождением. Например сделаем куки видимыми для поддоменов: 'domain=.example.com'
		'secure'  // 'secure=true', значит передавать только при https. По умолчанию стоит 'secure=false'
	}
}



{ // JSON

	// Метод JSON.parse() разбирает строку JSON, возможно с
	// преобразованием получаемого в процессе разбора значения.
	JSON.parse(json: string, reviver?: fn(key: string, value: ?))

	// Метод JSON.stringify() преобразует значение JavaScript в
	// строку JSON, возможно с заменой значений, если указана
	// функция замены, или с включением только определённых свойств,
	// если указан массив замены.
	JSON.stringify(value: ?, replacer?: fn(key: string, value: ?), space?: string|number)
}



{  // localStorage, sessionStorage
	// localStorage и sessionStorage один для всех объектов window одного доменного происхождения

	localStorage.setItem(name: string, value: string)
	localStorage.key(i: number)
	localStorage.getItem(name: string)
	localStorage.removeItem(name: string)
	localStorage.clear()


	{  // События
		storage  // данное событие генерируется во всех объектах window, где изменяется их localStorage или sessionStorage

		{  // Объект события в storage

			event.key  // имя или ключ задействованного элемента, или  null, если вызван clear()
			event.newValue  // новое значение элемента, или null, если был вызван removeItem()
			event.oldValue  // старое значение элемента, или null, если был вызван setItem()
			event.storageArea  // хранит само значение задействованного localStorage
			event.url  // адрес документа, сценарий которого выполнил операцию с хранилищем
		}
	}
}
