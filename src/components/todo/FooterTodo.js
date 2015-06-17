import React,{  PropTypes } from 'react';

export default class Footer {
static propTypes = {
  todos: PropTypes.array.isRequired,
  destroyCompletedTodo: PropTypes.func.isRequired
};

render () {
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
  let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
  itemsLeftPhrase += 'left';

  // Undefined and thus not rendered if no completed items are left.
  let clearCompletedButton;
  if (completed > 0) {
    clearCompletedButton = <button id = "clear-completed"
    onClick = { () => this.props.destroyCompletedTodo()}>
      Clear completed({completed  }) </button>;
  };

  return (
    <div id="footer">
      <span id="todo-count">
        <strong>
          {itemsLeft}
        </strong>
          {itemsLeftPhrase}
      </span>
        {clearCompletedButton}
    </div>
    );
  }
}
