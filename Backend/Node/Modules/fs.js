// Работа с бинарными данными и с файловой системой


// Считать файл
fs.readFile(file: string, cb: fn(err: Error, data: Buffer));

// Проверяет, существует ли такой путь
fs.exists(path: string, callback?: fn(exists: bool))

// Проверяет наличие файла по пути
fs.stat(path: string, callback?: fn(err: Error, stats: fs.Stats))
fs.lstat(path: string, callback?: fn(err: Error, stats: fs.Stats))
fs.fstat(fd: number, callback?: fn(err: Error, stats: fs.Stats))

// переименовать файл
fs.rename(oldPath: string, newPath: string, callback?: fn())

// удалить файл
fs.unlink(path: string, callback?: fn())


// TODO: https://nodejs.org/dist/latest-v7.x/docs/api/fs.html
