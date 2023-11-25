import React, { useState } from 'react';
// import './App.css';

const columnStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  margin: '10px',
  borderRadius: '5px',
};

const inputStyle = {
  marginBottom: '5px',
};

const buttonStyle = {
  marginLeft: '5px',
};

const App = () => {
  const [tasks, setTasks] = useState({
    backlog: [],
    inProgress: [],
    done: [],
  });

  const [newTaskText, setNewTaskText] = useState({
    backlog: '',
    inProgress: '',
    done: '', 
  });

  const handleAddTask = (column) => {
    if (newTaskText[column].trim() !== '') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [column]: [...prevTasks[column], { id: Date.now(), text: newTaskText[column] }],
      }));
      setNewTaskText((prevNewTaskText) => ({ ...prevNewTaskText, [column]: '' }));
    }
  };

  const handleMoveTask = (taskId, fromColumn, toColumn) => {
    setTasks((prevTasks) => {
      const taskToMove = prevTasks[fromColumn].find((task) => task.id === taskId);
      const updatedFromColumn = prevTasks[fromColumn].filter((task) => task.id !== taskId);
      const updatedToColumn = [...prevTasks[toColumn], taskToMove];

      return {
        ...prevTasks,
        [fromColumn]: updatedFromColumn,
        [toColumn]: updatedToColumn,
      };
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={columnStyle}>
        <h2>Backlog {tasks.backlog.length}</h2>
        <ul>
          {tasks.backlog.map((task) => (
            <li key={task.id} style={{color: 'red'}}>
              {task.text}
              <button onClick={() => handleMoveTask(task.id, 'backlog', 'inProgress')} style={buttonStyle}>
                Move to In Progress
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newTaskText.backlog}
          onChange={(e) => setNewTaskText({ ...newTaskText, backlog: e.target.value })}
          placeholder="New Task"
          style={inputStyle}
        />
        <button onClick={() => handleAddTask('backlog')} style={buttonStyle}>
          Add Task
        </button>
      </div>

      <div style={columnStyle}>
        <h2>In Progress {tasks.inProgress.length}</h2>
        <ul>
          {tasks.inProgress.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleMoveTask(task.id, 'inProgress', 'done')} style={buttonStyle}>
                Move to Done
              </button>
              <button onClick={() => handleMoveTask(task.id, 'inProgress', 'backlog')} style={buttonStyle}>
                Move to Backlog
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newTaskText.inProgress}
          onChange={(e) => setNewTaskText({ ...newTaskText, inProgress: e.target.value })}
          placeholder="New Task"
          style={inputStyle}
        />
        <button onClick={() => handleAddTask('inProgress')} style={buttonStyle}>
          Add Task
        </button>
      </div>

      <div style={columnStyle}>
        <h2>Done {tasks.done.length}</h2>
        <ul>
          {tasks.done.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleMoveTask(task.id, 'done', 'inProgress')} style={buttonStyle}>
                Move to In Progress
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newTaskText.done}
          onChange={(e) => setNewTaskText({ ...newTaskText, done: e.target.value })}
          placeholder="New Task"
          style={inputStyle}
        />
        <button onClick={() => handleAddTask('done')} style={buttonStyle}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
