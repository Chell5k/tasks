import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    item: ''
  }

  handleChange = (e) => {
    console.log('addTask:handleChange: From e.target.value:', e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('AddTask-handleSubmit: This is the task that we want to send up the chain: ', this.state)
    this.props.addTask(this.state)
  }

  render(){
    console.log('addTask:render - starting value for this.props:',this.props);
    console.log('addTask:render - starting value for this.state:',this.state);


    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">Add new task: </label>
        <input type="text" id="item" onChange={this.handleChange}/><hr/>
        <button>Submit</button>
      </form>
    )
  }
}
export default AddTask;