// Грамотное меню навигации должно показывать, в какой части приложения находится пользователь. Элементам меню, соответствующим
// активной странице, маршрутизатор может добавить определенный класс, который мы можем стилизовать. Это является главным
// приемуществом компонента <Link> вместо тега <a>
// В маршрутизаторе React есть два способа стилизации активных ссылок.

// 1 Вариант: с помощью стилей
class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LibraryJS</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <IndexLink to="/" activeStyle={{ color: "orange" }} /* onlyActiveOnIndex={true} */ className="mdl-navigation__link">Главная</IndexLink>
                            <Link to="/about" activeStyle={{ color: "orange" }} className="mdl-navigation__link">О проекте</Link>
                            <Link to="/books" activeStyle={{ color: "orange" }} className="mdl-navigation__link">Книги</Link>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}
activeStyle
onlyActiveOnIndex
<IndexLink></IndexLink> // рекомендуется исопльзовать этот компонент, тогда и onlyActiveOnIndex не надо использовать


// 2 Вариант: с помощью классов
class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LibraryJS</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <IndexLink to="/" activeClassName="is-active" className="mdl-navigation__link">Главная</IndexLink>
                            <Link to="/about" activeClassName="is-active" className="mdl-navigation__link">О проекте</Link>
                            <Link to="/books" activeClassName="is-active" className="mdl-navigation__link">Книги</Link>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

// 3 Вариант: использовать компонент высшего порядка, из которого мы будем возвращать компонент <Link>
