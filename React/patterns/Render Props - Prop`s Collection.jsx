// Данный шаблон позволяет отделить функционал и состояние компонента от его представления
// За представление отвечает клиент (в данном случае компонент <App />)
// За функционал и состояние отвечает сам компонент <Counter />

// Это - вариация простого паттерна Render Props, называется Prop`s Collection
// Вариация служит, чтобы отделить props`ы, предназначенные для клиента (в данном случае <App />)
// от props`ов, предназначенных для использования во вложенных компонентах. Такие свойства
// необходимо завернуть в коллекцию


import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => this.setState(state => ({ count: state.count + 1}));
  decrement = () => this.setState(state => ({ count: state.count - 1}));

  render() {
    return this.props.children({
      className: `${this.state.count > 0 ? 'touched' : 'not-touched'}  ${this.props.className}`,
      counterProps: {
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement,
      },
    });
  }
}

class App extends Component {
  render() {
    return (
      <Counter className="counter">
        {({ className, counterProps }) => (
          <div className={className}>
            <button onClick={counterProps.decrement}>-</button>
            <span>{counterProps.count}</span>
            <button onClick={counterProps.increment}>+</button>
          </div>
        )}
      </Counter>
    );
  }
}

export default App;