// На самом базовом уровне компонент представляет из себя функцию, которая возвращает JSX (React-элементы).
// Компоненты нужно называть с большоей буквой, как конструкторы.
// Компонент должен вернуть ровно один JSX-элемент, напр.

// props - переданные свойства через синтаксис атрибутов
function App(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p className="subtitle">Это мое первое приложение на ReactJS</p>
        </div>
    );
}


// Отображение
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);

// Отображение с помощью JSX
ReactDOM.render(
    <App title={"React Todo"}/>,
    document.getElementById('root')''
);
