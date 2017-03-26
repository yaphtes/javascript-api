let util = require('util');
let phrases = {
    "Hello": "Привет",
    "world": "мир"
};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
PhraseError.prototype.name = 'PhraseError';
util.inherits(PhraseError, Error);

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
HttpError.prototype.name = 'HttpError';
util.inherits(HttpError, Error);


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('Нет такой фразы: ' + name); // http 500, уведомление!
    }

    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, 'Нет такой страницы'); // http 404
    }
    return util.format('%s, %s!', getPhrase('Hell'), getPhrase('world'));
}


try {
    let page = makePage('index.html');
    console.log(page);
} catch (err) {
    if (err instanceof  HttpError) {
        console.log(err.status, err.message);
    } else {
        console.error('Ошибка: %s\n сообщение: %s\n стек: %s', err.name, err.message, err.stack);
    }

}
