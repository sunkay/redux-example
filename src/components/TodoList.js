import React, { PropTypes } from 'react';

export default class TodoList {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        {this.props.todos.map(todo =>
          <div key={todo.id}>
            <input type='checkbox' onClick={()=> this.props.markTodo(todo.id)}/>
            <span style={{ textDecoration: todo.marked ? 'line-through' : ''}}> {todo.text} </span>
            <button name="Delete" onClick={()=> this.props.deleteTodo(todo.id)} >Delete</button>
          </div>
        )}
      </div>
    );
  }
}
