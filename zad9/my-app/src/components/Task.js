import React, { Component } from 'react';
import '../styles/Task.css';


class Task extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="Task">
        <input type="checkbox" id="checkbox1"
                checked={this.props.item.completed}
                onChange={() => this.props.handleChange(this.props.item.id)}/>
        <label className="task_text">
          {this.props.item.text}
        </label>
      </div>
    );
  }
}

export default Task;
