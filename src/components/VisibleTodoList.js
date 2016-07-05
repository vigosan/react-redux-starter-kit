import React, { Component, PropTypes } from 'react';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(
          state.todos,
          state.visibilityFilter
        )}
        onTodoClick={id =>
          store.dispatch(toggleTodo(id))
        }
      />
    );
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object,
};

export default VisibleTodoList;
