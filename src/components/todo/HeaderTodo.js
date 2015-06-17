import React, { PropTypes } from 'react';
import  TodoTextInput from './TodoTextInput.react';

export class Header {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput id="new-todo" onSave={()=>this.props.addTodo()}  placeholder="What needs to be done?"/>
      </header>
    );
  }
}
