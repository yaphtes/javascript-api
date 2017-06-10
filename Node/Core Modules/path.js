const path = require('path');

// Название файла из полного пути к нему
path.basename(somepath)  // => string

// Составляет путь из строк
path.join(...paths)  // => string

// Расширение файла
path.extname(file)  // => string