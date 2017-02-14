// Компоненты, созданные через обычную функцию называются statless компоненты, т.е.
// компоненты без состояния. Для хранения состояния необходимо создать класс и поместить
// состояние в конструктор компонента.
// Сначала рекомендуется создавать функциональные компоненты и по мере необходимости
// преобразовывать их в класс.

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    render() {
        return (
            // todo: указать правильную иконку при соответствующем props.checked
            <button className='checkbox icon'>
                <i className='material-icons'>{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        );
    }
}
