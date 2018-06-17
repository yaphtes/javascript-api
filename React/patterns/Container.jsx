// Данный шаблон необходим позволяет отделить разметку от состояния

import React, { Component } from 'react';

function Counter({ count, decrement, increment }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

class CounterContainer extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState(state => ({ count: state.count + 1}));
  decrement = () => this.setState(state => ({ count: state.count - 1}));

  render() {
    return (
      <Counter
        count={this.state.count}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <CounterContainer />
    );
  }
}

export default App;