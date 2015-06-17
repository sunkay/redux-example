import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector , connect } from 'redux/react';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Footer from '../components/todo/FooterTodo';
import * as TodoActions from '../actions/TodoActions';


export default class TodoApp {
  render() {
    return (
      <Connector select={state => ({ todos: state.todos })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ todos, dispatch }) {
    const actions = bindActionCreators(TodoActions, dispatch);
    return (
      <div>
        <AddTodo {...actions} />
        <TodoList todos={todos} {...actions} />
        <Footer todos={todos} {...actions} />
      </div>
    );
  }
}
/*



@connect( state => ({ todos: state.todos }))
export default class TodoApp {
  render() {
    const { todos, dispatch } = this.props;
    return (
    {this.renderChild}
  );
  }

  renderChild( { todos, dispatch }) {
    const actions = bindActionCreators( TodoActions, dispatch );
    return (
      <div>
        <AddTodo {...actions } />
        <TodoList todos={todos} {...actions} />
      </div>
    );
  }
}

*/
