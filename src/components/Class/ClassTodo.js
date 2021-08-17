import React, { Component } from 'react';

class ClassTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { todo, todolist } = this.props;
    return (
      <ul>
        <strong>
          <li>{todolist}</li>
        </strong>
        <li>{todo.title}</li>
        <li>{todo.completed ? 'completed' : 'not completed'}</li>
      </ul>
    );
  }
}

export default ClassTodo;
