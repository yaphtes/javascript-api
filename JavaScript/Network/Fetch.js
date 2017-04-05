// url – URL, на который сделать запрос,
// options – необязательный объект с настройками запроса.
// Свойства options:
    // method – метод запроса,
    // headers – заголовки запроса (объект),
    // body – тело запроса: FormData, Blob, строка и т.п.
    // mode – одно из: «same - origin», «no - cors», «cors», указывает, в каком режиме кросс- доменности предполагается делать запрос.
    // credentials – одно из: «omit», «same - origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом.
    // cache – одно из «default», «no - store», «reload», «no - cache», «force - cache», «only -if-cached», указывает, как кешировать запрос.
    // redirect – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.
let promise = fetch(url: string, options?: object);





// При вызове fetch возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался.
fetch('/users')
    .then(response => response.json())
    .then(json => console.log('Parsed json', json))
    .catch(err => console.log('Parsed error', err));



// Объект response кроме доступа к заголовкам headers, статусу statusи некоторым
// другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.
resoponse.arrayBuffer()
resoponse.blob()
resoponse.formData()
resoponse.json()
resoponse.text()





// PS
// Примеры: https://github.com/github/fetch