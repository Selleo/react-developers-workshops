import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCounter, decrement, increment } from '../../../store/counter';
import { getTodos, fetchTodos } from '../../../store/todos';

class ListPage extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { counter, decrement, increment, todos } = this.props;

    return (
      <div>
        <div>
          Counter:
          <button onClick={decrement}>-</button>
          {counter}
          <button onClick={increment}>+</button>
        </div>

        {todos.loading && <div>Loading ...</div>}

        {todos.error ? (
          <div>{todos.error}</div>
        ) : (
          <ul>
            {todos.data.map(todo => (
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
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  fetchTodos: fetchTodos(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage);
