import React from 'react';

const TodoItem = ({ text, id, action, deleteTask, actionName, isCompleted }) => {
  console.log('todo item rerender');

  return (
    <li className="task-item">
      {text}
      <div>
        <button onClick={() => action(id)}>{actionName}</button>
        <button onClick={() => deleteTask(isCompleted, id)}>Delete</button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem) ;
