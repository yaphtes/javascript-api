// Маршрутизатор использует отдельную библиотеку для работу с историей, это или hashHistory или browserHistory.
// Благодаяря этому, например, мы можем перемещаться вперед или назад, используя соответстсвующие кнопки браузера.

// hashHistory для навигации использует символ хэш #. Такой вариант выглядит некрасиво, но работает во всех браузерах.

// Современные браузеры позволяют изменять url из JavaScript без отправления запросов на сервер. Благодаря этому способу
// нет необходимости использовать хак с хэшем. Если нам не нужен IE9-, то рекомендуется использовать browserHistory.
// При browserHistory есть одна особенность, при обновлении страницы вручную get запрос на сервер все таки отправится.
// Чтобы решить эту проблему нужно настроить сервер определенным образом:

// - webpack-dev-server
devServer: {
    historyApiFallback: true
}

// Express (пример)
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// Указываем Express где находится папка public
app.use(express.static(path.join(__dirname, 'public')));

// На все GET-запросы отправлять index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log('Express слушает по адресу localhost:' + PORT)
});
