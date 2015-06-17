import React, { PropTypes } from 'react';

export default class AddTodo {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  inputHandler(e) {
  const text = this.refs.input.getDOMNode().value.trim();
  //   const text = e.target.value.trim();

    if (e.which === 13 && text.length !== 0) {
      this.props.addTodo(text);
    //  this.refs.input.findDOMNode().value = '';
    e.target.value = "";
    }
  }

 onHandler() {
   var text = this.refs.input.getDOMNode().value.trim();
   if ( text.length !== 0 ) {
     this.props.addTodo( text );
     this.state.text = "";
   }
 }


  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyPress={(e) => this.inputHandler(e)} />
        </div>
    );
  }
}
