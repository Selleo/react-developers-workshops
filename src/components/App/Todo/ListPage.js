import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCounter, decrement, increment } from '../../../store/counter';
import { getTodos, fetchTodos, getTodosError } from '../../../store/todos';

class ListPage extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { counter, decrement, increment, todos, todosError } = this.props;

    return (
      <div>
        <div>
          Counter:
          <button onClick={decrement}>-</button>
          {counter}
          <button onClick={increment}>+</button>
        </div>

        {todosError ? (
          <div>{todosError}</div>
        ) : (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: getCounter(state),
  todos: getTodos(state),
  todosError: getTodosError(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  fetchTodos: () => fetchTodos(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage);
