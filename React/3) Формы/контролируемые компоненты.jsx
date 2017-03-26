import Button from './Button';
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }

    handleChange(event) {
        let title = event.target.value;

        this.setState({ title });
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.title} placeholder="Что нужно сделать"/>

                <Button type="submit">Добавить</Button>
            </form>
        );
    }
}

// Контролируемые компоненты - компоненты использующие this.state

// Использовать неконтролируемые компоненты проще и привычнее, однако контролируемые компоненты имеют несколько приемуществ:
// 1. поялвяется возможность проверить вводимые значения в реальном времени. Например, можно ограничить ввод опр. символов.
// 2. появляется возможность сохранить данные на случай обновления страницы.
// В связи с этим для форм лучше использовать контролируемые компоненты
