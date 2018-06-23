// Паттерн "Составной компонент" очень гибкий, он позволяет задать то, как всё выглядит, внутри одного компонета
// Позволяет работать с состояние внутри компонента. Клиент может сам задать содержимое вкладок, с помощью компонента
// <Tabs.Tab />


import React, { Component, Fragment } from 'react';

// Составной компонент <Tabs />
class Tabs extends Component {
  state = {
    activeTabIndex: 0
  };

  static Tab({ active, title, ...props }) {
    return <a className={`tab${active ? ' active' : ''}`} {...props}>{title}</a>;
  };

  handleClick = index => this.setState({ activeTabIndex: index });

  isActive = index => index === this.state.activeTabIndex;

  render() {
    return (
      <Fragment>
        <nav className="tabs">
          {React.Children.map(this.props.children, (child, index) =>
            React.cloneElement(child, {
              active: this.isActive(index),
              onClick() {
                this.handleClick(index);
              }
            }, child.props.title)
          )}
        </nav>

        {React.Children.map(this.props.children, (child, index) =>
          this.isActive(index) && <section>{child.props.children}</section>
        )}
      </Fragment>
    );
  }
}


// Использование
export default class App extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab title="tab 1">
          Lorem ipsulm sid ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium 1.
        </Tabs.Tab>

        <Tabs.Tab title="tab 2">
          Lorem ipsulm sid ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium 2.
        </Tabs.Tab>

        <Tabs.Tab title="tab 3">
          Lorem ipsulm sid ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium 2.
        </Tabs.Tab>
      </Tabs>
    );
  }
}