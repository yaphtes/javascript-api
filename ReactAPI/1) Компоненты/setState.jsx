// Для изменения состояния применяется метод this.setState(), прямое обращение к this.state не работает.
// При каждом вызове this.setState() вызывается метод render()

this.setState(states: object, callback?: Function)
this.setState(cb: Function)

// Состояние меняется асинхронно, с некоторой задержкой, поэтому после setState некоторые данные о состоянии
// могут быть недоступны. Для решения этой проблемы можно передать callback вторым параметром, он вызовется
// после изменения состояния.
this.setState({
    checked: !this.state.checked
}, () => console.log(checked));

// Третий вариант использования setState
this.setState((prevState, props) => {
    return {
        checked: !prevState.checked
    };
});



class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            // todo: указать правильную иконку при соответствующем props.checked
            <button onClick={this.handleClick} className='checkbox icon'>
                <i className='material-icons'>{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        );
    }
}

// В обработчиках нужно привязать контекст, для этого:
// 1) Используется стрелочная функция: onClick={() => this.handleClick()}
// 2) Использовать bind в месте привязки onClick=this.handleClick.bind(this)
// 3) Использовать bind в конструкторе компонента: this.handleClick = this.handleClick.bind(this)
