ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/books" component={Books}>
                <IndexRedirect to="/books/javascript"/>
                <Route path=":topic">
                    <IndexRoute component={Shelf} books={books}/>
                    <Route path=":slug" component={Book} books={books}/>
                </Route>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
document.getElementById('root'));

// данные передаются как обычные JSX-атрибуты (books), а читать в компоненте их можно с помощью свойства route (props.route.books)
