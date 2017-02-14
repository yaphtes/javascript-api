// 1 Вариант (не рекомендуется)
// Если использовать hashHistory, то нужно добавть перед ссылками символ хэш #


// 2 вариант (рекомендуется)
// Вместо ссылки <a> использовать компонент <Link>
import React from 'react';

import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LibraryJS</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <Link to="/" className="mdl-navigation__link">Главная</Link>
                            <Link to="/about" className="mdl-navigation__link">О проекте</Link>
                            <Link to="/books" className="mdl-navigation__link">Книги</Link>
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

export default App;
