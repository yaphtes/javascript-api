// Маршрутизатор позволяет создавать вложенные маршруты - это позволяет отобразить элементы, использующиеся на многих
// страницах (напр. <header>). Кроме того, вложенные маршруты наглядно отображают структура приложения в целом.
// В app нужно поместить вложенные маршруты через this.props.children в нужное место.

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/books" component={Books}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
document.getElementById('root'));
