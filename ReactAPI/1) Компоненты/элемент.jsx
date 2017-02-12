// Это React-элементы, которые являются основой React-компонентов.

React.createElement(type: string, props: object, data: string); // => {component}
ReactDOM.render(component: object, node: HTMLElement); // => node (реальный дом)


let title = React.createElement('h1', null, 'React todo');
let subtitle = React.createElement('p', { className: 'subtitle' }, 'Это мое первое приложение на ReactJS');
let container = React.createElement('div', null, title, subtitle);

{
    // Свойства передаваемые элементу
    title.props

    // Содержимое элемента автоматически присваивается в качестве значения свойства children объекта props.
    // Значением является либо текст, либо элемент, либо массив элементов, в зависимости от своего содержимого.
    title.props.children
}

// Тип элемента
title.type


// JSX вариант
let container = (
    <div>
        <h1>React Todo</h1>
        <p className='subtitle'>Это мое первое приложение на ReactJS</p>
    </div>
);


// рендерит компонент по VirtualDOM структуре и возвращает реальный DOM.
const dom = ReactDOM.render(container, document.getElementById('root'));
