import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCounter, decrement, increment } from '../../../store/counter';
import { getTodos, addTodo } from '../../../store/todos';

class ListPage extends Component {
  componentDidMount() {
    this.props.addTodo({ id: 3, text: 'Hello!' });
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

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: getCounter(state),
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPage);
