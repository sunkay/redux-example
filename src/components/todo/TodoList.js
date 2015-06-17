import React, { PropTypes } from 'react';

export default class TodoList {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    destroyTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleAllTodoToComplete: PropTypes.func.isRequired
  };

  render() {
    let  allTodos = this.props.todos;
    let total = Object.keys(allTodos).length;

    if (total === 0) {
      return null;
    }

    let completed = 0;
    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completed++;
      }
    }

    let itemsLeft = total - completed;
    let areAllComplete = false;

    areAllComplete = itemsLeft === 0 ? true : false;

    return (
      <div id="main" className="uk-container">
        <div>
        <input id="toggle-all" type="checkbox" onChange={() => this.props.toggleAllTodoToComplete()} checked={areAllComplete ? 'checked' : ''} /><label htmlFor="toggle-all">Mark all as complete</label></div>
      <div>
        {this.props.todos.map(todo =>
          <div key={todo.id}>
            <input type='checkbox' onClick={()=> this.props.toggleTodo(todo.id)}/>
            <span style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
              <label onDoubleClick = {()=> this.props.destroyTodo(todo.id)} > {todo.text} </label>

              </span>
            <button name="Delete" onClick={()=> this.props.destroyTodo(todo.id)} >Delete</button>
          </div>
        )}
      </div>
    </div>
    );
  }
}
