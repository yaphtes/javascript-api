// MyComponent.propsTypes - объект, указывающий ожидаемые типы данных для свойств.
// MyComponent.defaultProps - объект, указывающий значения по-умолчанию для props нашего компонента.

import { PropTypes } from 'react';

function App(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p className="subtitle">Это мое первое приложение на ReactJS</p>
        </div>
    );
}

// указывает ожидаемые типы данных, передаваемых в props
App.propTypes = {
    title: PropTypes.string.isRequired
};

// Значения по-умолчанию
App.defaultProps = {
    title: название 'приложения'
};


// полный список типов свойств https://codedojo.ru/tutorials/react/proptypes
