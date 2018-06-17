// Данный шаблон позволяет отделить функционал и состояние компонента от его представления
// За представление отвечает клиент (в данном случае компонент <App />)
// За функционал и состояние отвечает сам компонент <Counter />

// Это - вариация простого паттерна Render Props, называется Prop`s Getter
// Вариация служит, чтобы отделить props`ы, предназначенные для клиента (в данном случае <App />)
// от props`ов, предназначенных для использования во вложенных компонентах. При том, в данной вариации
// есть возможность отправить что-то с клиента в сам компонет. Как, например в 49 и 50 строках кода.

import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState(state => ({ count: state.count + 1}));
  decrement = () => this.setState(state => ({ count: state.count - 1}));

  render() {
    return this.props.children({
      className: `${this.state.count > 0 ? 'touched' : 'not-touched'} ${this.props.className}`,
      getCounterProps({ onClick, map }) {
        return {
          count: map(this.state.count),
          increment: () => {
            this.increment();
            onClick();
          },
          decrement: () => {
            this.decrement();
            onClick();
          }
        };
      }
    });
  }
}

class App extends Component {
  sendAnalytics = () => console.log('Analytics sended');

  render() {
    return (
      <Counter className="counter">
        {({ className, getCounterProps }) => {
          const counterProps = getCounterProps({
            onClick: this.sendAnalytics,
            map: count => count * 2
          });

          return (
            <div className={className}>
              <button onClick={counterProps.decrement}>-</button>
              <span>{counterProps.count}</span>
              <button onClick={counterProps.increment}>+</button>
            </div>
          );
        }}
      </Counter>
    );
  }
}

export default App;