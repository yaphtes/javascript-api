// Первый вариант
import { Router, Route, hashHistory } from 'react-router';

// нужно указать path="/" какому либо из вложенных маршрутов, а из родительского path убрать вообще, тогде родительский
// Route будет грузиться всегда, вне зависимости от указанного маршрута. Всю работу будут делать вложенные маршруты.
ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/books" component={Books}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
document.getElementById('root'));



// Второй вариант (рекомендуемый)
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Подход, подобно серверам. Вместо того, чтобы убирать path у родительского компонента, мы просто сделаем один из маршрутов
// с помощью <IndexRoute>. Подобное index.html при работе с сервером, <IndexRoute> будет искаться первым и отдаваться, если путь path="/"
// Использовать <IndexRoute> можно использовать на любом уровне вложенности.
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/books" component={Books}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
document.getElementById('root'));


// Пример с <IndexRedirect/>
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/books" component={Books}>
                <IndexRedirect to="/books/javascript"/>  // когда попадем на путь /books, то перенеси нас на /books/javascript
                <Route path=":topic">
                    <IndexRoute component={Shelf} />
                    <Route path=":slug" component={Book}/>
                </Route>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
document.getElementById('root'));
