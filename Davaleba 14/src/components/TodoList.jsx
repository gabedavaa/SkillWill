import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../styles/styles.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask !== '') {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
      };

      setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      setNewTask('');
    }
  };

  const finishTask = (id) => {
    const unfinishedTask = tasks.find((task) => task.id === id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, unfinishedTask]);
  };

  const unfinishTask = (id) => {
    const finishedTask = completedTasks.find((task) => task.id === id);
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((task) => task.id !== id));
    setTasks((prevTasks) => [...prevTasks, finishedTask]);
  };

  const deleteTask = (isCompleted, id) => {
    if (isCompleted) {
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks.filter((task) => task.id !== id));
    } else {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  console.log('todo list rerender');

  return (
    <div className="todo-list-container">
      <h2>To-Do List</h2>

      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        <h3>Tasks to be Performed</h3>
        <ul className="task-list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              text={task.text}
              id={task.id}
              action={finishTask}
              deleteTask={deleteTask}
              actionName="finish"
              isCompleted={false}
            />
          ))}
        </ul>
      </div>

      <div className="completed-tasks">
        <h3>Completed Works</h3>
        <ul className="task-list">
          {completedTasks.map((task) => (
            <TodoItem
              key={task.id}
              text={task.text}
              id={task.id}
              action={unfinishTask}
              deleteTask={deleteTask}
              actionName="unfinish"
              isCompleted={true}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
