import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    msg: '',
    task: {
      item: ''
    }
  }

  handleChange = (e) => {
    console.log('addTask:handleChange: From e.target.value:', e.target.value);
    console.log('addTask:handleChange: From e.target.id:', e.target.id);
    console.log('addTask:handleChange: from e.target console.log:',e.target);
    this.setState({
      task: {
        item: e.target.value
      }
    })
  }

  validateTask = (task) => {
    console.log('validateTask - validating this task:', task);
    return task.item !== ''? true : false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddTask-handleSubmit: This is the task that we want to send up the chain: ', this.state)
    //send the parent a copy. If you send this component's actual state, the parent
    //can affect this component's state directly.
    let newTask = {...this.state.task};
    //validate task. if invalid, set flag in state so that a message is provided to the user.
    let taskIsValid = this.validateTask(newTask);
    console.log('AddTask:handleSubmit: taskIsValid:', taskIsValid);
    if (taskIsValid) {
      //submit task.
      this.props.addTask(newTask);
      this.setState({
        msg: '',
        task: {
          item: ''
        }
      })
    } else {
      this.setState({msg:'Error detected'});
      console.log('AddTask:handleSubmit - error detected.');
    }
  }


  render(){
    console.log('addTask:render - starting value for this.props:',this.props);
    console.log('addTask:render - starting value for this.state:',this.state);

    return(
      <div>
        <div>
          {this.state.msg 
            ? <h3>You submitted an empty task... try again.</h3>
            : null
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Add new task: </label>
          <input type="text" id="item" value={this.state.task.item} onChange={this.handleChange}/><hr/>
          <button>Submit</button><br/>
        </form>
        <br/>
      </div>
    )
  }
}
export default AddTask;