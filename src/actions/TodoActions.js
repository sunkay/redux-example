import {
  ADD_TODO, DESTROY_TODO, UPDATE_TODO,
  TOGGLE_TODO, TOGGLEALL_TODO,
   DESTROYCOMPLETED_TODO
}
from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function destroyTodo(id) {
  return {
    type: DESTROY_TODO,
    id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function toggleAllTodoToComplete(id) {
  return {
    type: TOGGLEALL_TODO
  };
}

export function updateTodo(id, text) {
  return {
    type: UPDATE_TODO,
    id,
    text
  };
}

export function destroyCompletedTodo() {
  return {
    type: DESTROYCOMPLETED_TODO
  }
}
