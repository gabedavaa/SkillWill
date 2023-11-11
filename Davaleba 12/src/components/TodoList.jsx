import React, { Component } from 'react';
import TodoItem from './TodoItem';  
import '../styles/styles.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      newTask: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    if (this.state.newTask !== '') {
      const newTask = {
        id: Date.now(),
        text: this.state.newTask,
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        newTask: '',
      }));
    }
  };

  finishTask = (id) => {
    const unfinishedTask = this.state.tasks.find((task) => task.id === id);

    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
      completedTasks: [...prevState.completedTasks, unfinishedTask],
    }));
  };

  unfinishTask = (id) => {
    const finishedTask = this.state.completedTasks.find((task) => task.id === id);

    this.setState((prevState) => ({
      completedTasks: prevState.completedTasks.filter((task) => task.id !== id),
      tasks: [...prevState.tasks, finishedTask],
    }));
  };

  deleteTask = (isCompleted, id) => {
    if (isCompleted) {
      this.setState((prevState) => ({
        completedTasks: prevState.completedTasks.filter((task) => task.id !== id),
      }));
    } else {
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }));
    }
  };

  render() {
    return (
      <div className="todo-list-container">
        <h2>To-Do List</h2>

        <div className="input-container">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Enter new task"
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <div>
          <h3>Tasks to be Performed</h3>
          <ul className="task-list">
            {this.state.tasks.map((task) => (
              <TodoItem
                key={task.id}
                text={task.text}
                id={task.id}
                action={this.finishTask}
                deleteTask={this.deleteTask}
                actionName='finish'
                isCompleted={false}
              />
            ))}
          </ul>
        </div>

        <div className="completed-tasks">
          <h3>Completed Works</h3>
          <ul className="task-list">
            {this.state.completedTasks.map((task) => (
              <TodoItem
                key={task.id}
                text={task.text}
                id={task.id}
                action={this.unfinishTask}
                deleteTask={this.deleteTask}
                actionName='unfinish'
                isCompleted='true'
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
