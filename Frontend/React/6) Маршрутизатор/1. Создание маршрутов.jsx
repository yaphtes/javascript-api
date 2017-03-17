import { Router, Route, hashHistory, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/books" component={Books}/>
        <Route path="*" component={NotFound}/>
    </Router>,
document.getElementById('root'));

// Router

    // использовать для url-адресов символ #хэш
    history={hashHistory}

    // использовать встроенный API браузера для работы с историей, позволяет использовать красивые URL
    // этот способ является рекомендуемым, но он требует определенной настройки сервера
    history={browserHistory}


// Route
