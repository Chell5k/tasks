import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: [
      {id: 1, item: 'Walk the dog'},
      {id: 2, item: 'Shop for groceries'},
      {id: 3, item: 'Call the doctor'}
    ]
  }

  addTask = (task)=>{
    console.log('App:addTask: Here is state at the start:', this.state)
    console.log('App:addTask: this is the task that we got from the UI component:', task);
    let num = Math.random();
    console.log('App:addTask: new id# will be:', num)
    task.id = num;
    console.log('App:addTask: new task (after getting an id):', task)
    let tasks = [...this.state.tasks, task];
    console.log('App:addTask: new tasks array:', tasks)
    this.setState({
      tasks: tasks
    })
  }

  deleteTask = (id) => {
    console.log('App:deleteTask - we have been asked to delete the task with id of ', id);
    let tasks = this.state.tasks.filter((task)=>{
      return task.id !== id;
    })
    console.log('App:deleteTask - here are the tasks, after the deletion:', tasks);
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Tasks!</h1>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
        <hr/>
        <AddTask addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
