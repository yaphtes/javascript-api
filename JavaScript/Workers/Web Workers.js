{   // в worker`е есть:

    // navigator
    // location
    // applicationCache
    // XMLHttpRequest
    // WebSocket
    // importScripts
}

{   // Создание выделенного worker
    {   // Передача сообщений В и ИЗ выделенного worker:
        // 1) В main.js:
        // Создаение выделенного worker
        var worker = new Worker('worker.js')
        
        // Отправить данные worker`у
        worker.postMessage(data)
    
        // 2) В worker.js:
        // Так выделенный worker прослушивает сообщения
        self.onmessage = event => {  }
    
        // Отправить данные потоку, создавшему worker
        self.postMessage(data)


        {   // Другие методы:
            // Немедленно завершить worker (из main потока)
            worker.terminate()
    
            // Немедленно завершить worker (из worker потока)
            self.close()
        }
    }

    // Worker`ы могут внутри себя создавать другие worker`ы, так называемые
    // subworkers, здесь работает политика same origin
}

{   // subworkers
    // стандарт диктует, что можно выделять worker из worker`а, это есть в
    // Firefox, но пока нет в Chrome
}

{   // Импорт скриптов и библиотек
    self.importScripts();                        /* imports nothing */
    self.importScripts('foo.js');                /* imports just "foo.js" */
    self.importScripts('foo.js', 'bar.js');      /* imports two scripts */

    // PS:
    // Браузер загружает каждый указанный скрипт и исполняет его. Любые глобальные объекты,
    // создаваемые каждым скриптом могут быть использованы в текущем worker'е. Если скрипт не удалось
    // загрузить, будет брошена ошибка NETWORK_ERROR, и последующий код не будет исполнен.
    // Тем не менее, код исполненный ранее (включая отложенный при помощи window.setTimeout())
    // останется функционален. Объявления функций идущие после вызова метода importScripts()
    // также будут доступны, т.к. объявления функций всегда обрабатываются перед остальным кодом.
    // Функция выполняется синхронно, скрипты могут быть загружены в любом порядке, но выполнены в порядке передачи аргументов.
}

{   // Обработка ошибок
    self.onerror = err => {}
    err.message // => сообщение об ошибке в читаемом виде
    err.filename // => имя файла со скриптом, в котором ошибка произошла
    err.lineno // => номер строки в файле, в котором произошла ошибка

    // Событие не всплывает и его можно отменить. Для отмены действия по умолчанию,
    // worker может вызвать метод  preventDefault() в обработчике события ошибки:
    self.onerror = err => {
        self.preventDefault();
    };    
}

// TODO: shared workers: https://developer.mozilla.org/ru/docs/DOM/Using_web_workers