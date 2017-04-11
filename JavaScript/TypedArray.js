// Example:

// создает участок памяти (буфер) длиной 32 байт (256 бит) и заполняет нулями
let buffer = new ArrayBuffer(32);

// количество байт в бффере
buffer.byteLength

// создает типизированный массив (говорят представление) 16 битных целых чисел без знака,
// отображенный на 256 битный буфер, то есть мы получим 16 16 битных элементов (т.к. 256 / 16 = 16)
let uint16View = new Uint16Array(buffer);

// создает типизированный массив 32 битных целых чисел со знаком, отображенный на 256 битный буфер
// т.е. мы получаем 8 32 битных чисел. Отображение ссылается на ту же последовательность, что и отображение выше
// Другими словами мы можем иметь несколько представлений на одну и ту же последовательн (буфер)
let int32View = new Int32Array(buffer);



/*** <<< Buffer >>> ***/

// создает участок памяти длной в byteLength байт (byteLength * 8 бит)
let buffer = new ArrayBuffer(byteLength)



/*** <<< DataView >>> ***/
// Представление DataView для ArrayBuffer обеспечивает низкоуровневый интерфейс для чтения и записи множественных
// типов чисел в ArrayBuffer независимо от принадлежности к платформе

// Экземпляр DataView (view, наложенный на buffer) с битовым смещением byteOffset, длиной byteLength
new DataView(buffer, byteOffset?: number, byteLength?: number)

// ArrayBuffer, на который ссылается DataView
DataView.prototype.buffer

// Количество байт ArrayBuffer
DataView.prototype.byteLength

// Смещение байт в DataView (задется, при new DataView)
DataView.prototype.byteOffset

// Геттеры
DataView.prototype.getFloat32()
DataView.prototype.getFloat64()
DataView.prototype.getInt16()
DataView.prototype.getInt32()
DataView.prototype.getInt8()
DataView.prototype.getUint16()
DataView.prototype.getUint32()
DataView.prototype.getUint8()

// Сеттеры
DataView.prototype.setFloat32()
DataView.prototype.setFloat64()
DataView.prototype.setInt16()
DataView.prototype.setInt32()
DataView.prototype.setInt8()
DataView.prototype.setUint16()
DataView.prototype.setUint32()
DataView.prototype.setUint8()



/*** <<< Представления для ArrayBuffer (последовательностей) >>> ***/

// Варианты использования представлений, в примерах определим его как [constructor]
{

    // Создает новое представление, которое отображает буфер
    new [constructor](buffer, offset ?: number, length ?: number)

    // Создает новое представление в новом буфере с числом байт length
    new [constructor](length, offset ?: number, length ?: number)

    // Создает новое представление и новый буфер и копирует содержимое из представления typedArr
    new [constructor](typedArr, offset ?: number, length ?: number)

    //  Создает новое представление и новый буфер и в цикле просматривает псевдомассив
    // (массивоподобный объект) с целью копирования его содержимого
    new [constructor](obj, offset ?: number, length ?: number)


    // Когда вызывается с буфером и, необязательно, с аргументом byteOffset и length, создается новое
    // типизированное представление массива, которое просматривает указанный ArrayBuffer. Параметры
    // byteOffset и length определяют диапазон памяти, который будет отображаться в режиме типизированного
    // массива.Если оба значения опущены, просматривается весь буфер; Если только длина опущена, рассматривается
    // остаток буфера
}

// Варианты использования конструкторов
{

    // 8 битное целое со знаком
    new Int8Array()

    // 8 битное целое без знака
    new Uint8Array()

    // 8 битное целое без знака, со значениями в диапазоне от 0 до 255
    new Uint8ClampedArray()

    // 16 битное целое со знаком
    new Int16Array()

    // 16 битное целое без знака
    new Uint16Array()

    // 32 битное целое со знаком
    new Int32Array()

    // 32 битное целое без знака
    new Uint32Array()

    // 32 битное с плавающей точкой
    new Float32Array()

    // 64 битное с плавающей точкой
    new Float64Array()
}

// TyperArray.prototype
{

    // На месте сортирует элементы типизированного массива и возвращает отсортированный
    // в отличии от Array.prototype.sort(), по-умолчанию выполняет сравнение с помощью
    // численной сортировки, а не преобразует значения в строки для лексикографического
    // сравнения
    TypedArray.prototype.sort(compare ?: func)

    // Отсутствуют методы которые изменяют массив, например push() и pull(). Для изменения
    // следует использовать низкоуровневое API DataView
}
