import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    const {tasks, deleteTask} = this.props;
    console.log(tasks);
    const taskList = tasks.map((task)=>{
      return(
        <div key={task.id}>
          <h2>{task.item}</h2>
          <button onClick={ () => {deleteTask(task.id)} }>Delete Task</button>
          <hr/>
        </div>
      )
    })
    return(
      <div>
        {taskList}
      </div>
    )
  }
}

export default TaskList;