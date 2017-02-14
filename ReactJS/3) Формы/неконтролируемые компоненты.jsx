// ссылки ref компонента, возращает HTMLElement
this.refs


import Button from './Button';
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.refs.title);
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Что нужно сделать"/>

                <Button type="submit">Добавить</Button>
            </form>
        );
    }
}

// Компоненты, которые используют this.refs и соответственные ссылки ref у элементов, называются неконтролируемыми
// компонентами. Это означает, что React никак не контролирует то, что (в данном случае) пользователь вводит в поле.
// (В данном случае) пользователь нажимает на кнопку и мы получаем текс поля через this.refs.title прямо из DOM-узла.

// Когда мы пишем приложение на React, мы не должны волноваться о состоянии DOM-узлов, чтобы их состояние соответствовало
// состоянию React приложения. Для этого используются контролируемые компоненты.
