import React, { Component, PropTypes } from 'react';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';

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
    const { filter } = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(
          state,
          filter
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
