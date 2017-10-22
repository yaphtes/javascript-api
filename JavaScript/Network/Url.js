// Создать объект url.
// url - абсолютный или относительный путь
// base - базовый путь, используется, если url - относительный, иначе base игнорируется,
// по-умолчанию равен ''
let url = new URL(url, base ?)


/*** <<< Свойства экземпляров >>> ***/

// Полный url
url.href  // => string

// Протокол, включая завершающий ':'
url.protocol  // => string

// Хост. Т.е. имя хостя, ':', и порт
url.host  // => string

// Имя хоста
url.hostname  // => string

// Порт
url.port  // => string

// Путь, включая начальный '/'
url.pathname  // => string

// url параметры, включая начальный '?'
url.search  // => string

// Фрагмент, идентифицирующий url, включая начальный '#'
url.hash  // => string

// Имя пользователя, предшествующее хосту
url.username  // => string

// Пароль пользователя, предшествующий хосту
url.password  // => string

// Origin of the url - содержит protocol, host и prot
url.origin  // => string

// Удобный интерфейс для взаимодействуия с аргументами GET запроса
url.searchParams  // => object



/*** <<< url.searchParams интерфейс >>> ***/

// Строка параметров без '?'
let searParams = new URLSearchParams(url.search.slice(1))
// или
let searchParams = url.searchParams

searchParams.append(key, value)  // => undefined

searParams.delete(key)  // => undefined

searParams.entries()  // => iterable [key, value]

searParams.get(key)  // => string

searParams.getAll(key)  // => [string]

searParams.has(key)  // => boolean

searParams.keys()  // => iterable [key]

// То же, что и append, но если было несколько совпадающих значений для данного ключа, этот метод удаляет остальные
searParams.set(key, value)

// Сортирает параметры в лексикографическом порядке ключей
searParams.sort()  // => undefined

// Возвращает исходную строку url-параметров
searchParams.toString()  // => string

searParams.values()  // => iterable [value]



/*** <<< Cтатические свойства и методы >>> ***/

// Создает так называемый object-url из объека типа File или Blob
// В дальнейшем этот object-url может быть присвоен, например img.src и картинка отобразится
// После img.onload, необходимо уничтожить object.url (пример будет ниже)
URL.createObjectURL(object)  // => string

// Уничтожает object-url
URL.revokeObjectURL(object)

// Пример использования object-url с объектом типа File, с тем же успехом можно было использовать и Blob
function handleFile(file) {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.onload = function () {
        URL.revokeObjectURL(this.src);
    };
}