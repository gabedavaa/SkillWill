import React, { PureComponent } from 'react';

class TodoItem extends PureComponent {
  render() {
    console.log('todo item rerender');

    const { text, id, action, deleteTask, actionName, isCompleted } = this.props;

    return (
      <li className="task-item">
        {text}
        <div>
          <button onClick={() => action(id)}>{actionName}</button>
          <button onClick={() => deleteTask(isCompleted, id)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
