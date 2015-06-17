import React, { PropTypes } from 'react';

export default class ItemEditOrDisplay {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    destroyTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };

constructor(pops) {
  this.state = {
    isEditing:false
  };
}

  render: function() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }


    return (

    );
  }

  _onDoubleClick() {
    this.setState({isEditing: true});
  }



}
