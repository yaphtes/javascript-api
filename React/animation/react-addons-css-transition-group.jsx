import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Шаблон
<ReactCSSTransitionGroup
    component="section"
    className="todo-list"
    transitionName="slide"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={true}
    transitionLeave={true}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}>


    {this.state.todos.map(todo =>
        <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onStatusChange={this.handleStatusChange}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
        />
    )}
</ReactCSSTransitionGroup>

// Укажет какой DOM-элемент мы хотим получить в качестве
// обертки. По-умолчанию это <span>
component

// Имя перехода. Имя появится в классе. Класс необходимо добавить в css
transitionName

// Продолжительность перехода в миллисекундах при появлении элемента в DOM. Свойство в css
// transition-delay должно совпадать со значением transitionEnterTimeout. Добавляется класс html-элементу
// при появлении в DOM. Сначала появится slide-enter и через укзаанное время slide-enter-active
transitionEnterTimeout

// Продолжительность перехода в миллисекундах при удалении элемента из DOM. Свойство в css
// transition-delay должно совпадать со значением transitionEnterTimeout.  Добавляется класс html-элементу
// при удалении из DOM. Сначала появится slide-leave и через укзаанное время slide-leave-active
transitionLeaveTimeout

// Если хотим убрать анимацию, то нужно передать false в соответственные свойства.
// По умолчанию значение true и в таком случае свойство указывать не нужно.
transitionEnter, transitionLeave

// Активирует анимацию самого компонента ReactCSSTransitionGroup, напр. при появлении его в DOM.
// По умолчанию false. Добавляется класс html-элементу slide-appear
transitionAppear={true}

// Продолжительность перехода для ReactCSSTransitionGroup.
// Добавляется класс html-элементу slide-appear-active
transitionAppearTimeout={500}
