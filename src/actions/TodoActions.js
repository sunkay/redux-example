import { ADD_TODO, DELETE_TODO, MARK_TODO } from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function markTodo(id) {
  return {
    type: MARK_TODO,
    id
  };
}
