import {
  ADD_TODO, DESTROY_TODO, UPDATE_TODO,
  TOGGLE_TODO, TOGGLEALL_TODO,
  DESTROYCOMPLETED_TODO
}
from '../constants/ActionTypes';

function generateId() {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  return id;
}
const initialState = [{
  text: 'do something',
  complete: false,
  id: generateId()
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: generateId(),
        complete: false,
        text: action.text
      }, ...state];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.text = action.text;
        }
        return todo;
      });
      case DESTROY_TODO:
        return state.filter(todo => todo.id !== action.id);

    case TOGGLEALL_TODO:
      return state.map(todo => {
        todo.complete = true;
        return todo;
      });
    case DESTROYCOMPLETED_TODO:
      return state.filter(todo => {
        if (!todo.complete)
        return todo ;
        });
  }

  return state;
}
