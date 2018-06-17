// Данный шаблон позволяет отделить функционал и состояние компонента от его представления
// За представление отвечает клиент (в данном случае компонент <App />)
// За функционал и состояние отвечает сам компонент <Counter />

import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState(state => ({ count: state.count + 1}));
  decrement = () => this.setState(state => ({ count: state.count - 1}));

  render() {
    return this.props.children({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    });
  }
}

class App extends Component {
  render() {
    return (
      <Counter>
        {({ decrement, increment, count }) => (
          <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        )}
      </Counter>
    );
  }
}

export default App;