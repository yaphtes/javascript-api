// Обычный синтаксис
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

Checkbox.propTypes = {
    initiallyChecked: React.PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
    initiallyChecked: false
};


// Можно писать так
const Checkbox = React.createClass({
    propTypes: {
        initiallyChecked: React.PropTypes.bool.isRequired
    },

    getDefaultProps: {
        return {
            initiallyChecked: false
        };
    },

    getInitialState() {
        return {
            checked: false
        }
    },

    handleClick(event) {
        this.setState({ checked: !this.state.checked });
    },

    render() {
        return (
            // todo: указать правильную иконку при соответствующем props.checked
            <button onClick={this.handleClick} className='checkbox icon'>
                <i className='material-icons'>{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        );

    }
});
// Приятной особенностью старого синтаксиса является автоматическая привязка методов к this, поэтому не нужно
// использовать this.handleClick = this.handleClick.bind(this)
