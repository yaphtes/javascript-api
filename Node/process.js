process

// Список компонентов Node и их версии
process.versions

// Предоставляет богатую информацию о том, что Node знает о нашей среде разработки
process.env

// Имя приложения, url исходного кода, имя LTS и т.п.
process.release

// Объекты ввода-вывода
{

    // Поток с поддержкой чтения для stdin
    process.stdin

    // Поток с поддержкой записи для stdout
    process.stdout

    // Поток с поддержкий записи для stderr
    process.stderr


    process.stdin
    {

        // Назначает кодировку потока, если этого не сделать, то мы получим буфер, а не строку
        process.stdin.setEncoding('utf-8')

        // Чтение данных из потока ввода
        let input = process.stdin.read();
    }

    process.stdout
    {

        // Копирование данных data в поток вывода
        process.stdout.write(input)
    }
}

// Завершить приложение
process.exit()


// PS:
// Функции ввода-вывода объекта process наследуют от EventEmitter, значит их можно, например читать:
// process.stdin.on('readable', () => { ... });