// const Console = ('console').Console;
// или ...
// const Console = console.Console;
// или ...
const Console = console.constructor;


// PS. можно создать собственный логгер, который будет журналировать в файлы
const fs = require('fs');

const stdout = fs.createWriteStream('stdout.log');
const stderr = fs.createWriteStream('stderr.log');

const logger = new Console(stdout, stderr);

let value = 5;
logger.log(`count: ${value}`);