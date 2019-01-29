import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    item: ''
  }

  handleChange = (e) => {
    console.log('addTask:handleChange: From e.target.value:', e.target.value);
    console.log('addTask:handleChange: From e.target.id:', e.target.id);
    console.log('addTask:handleChange: from e.target console.log:',e.target);
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddTask-handleSubmit: This is the task that we want to send up the chain: ', this.state)
    //send the parent a copy. If you send this component's actual state, the parent
    //can affect this component's state directly.
    let newTask = {...this.state};
    if (!newTask.item) {
      console.log('AddTask:handleSubmit - note that user did not provide a task - 1.');
    }
    if (newTask.item === '') {
      console.log('AddTask:handleSubmit - note that user did not provide a task - 2.');
    }
    this.props.addTask(newTask);
    this.setState({
      item:''
    })
  }

  render(){
    console.log('addTask:render - starting value for this.props:',this.props);
    console.log('addTask:render - starting value for this.state:',this.state);


    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Add new task: </label>
          <input type="text" id="item" value={this.state.item} onChange={this.handleChange}/><hr/>
          <button>Submit</button><br/>
        </form>
        <br/>
      </div>
    )
  }
}
export default AddTask;