import React, { Component } from 'react';

class NewTask extends Component {


  render() {
    return (
      <div className="NewTask">
        <input type="text" onChange={() => this.props.updateInputValue(event)}/>
        <button onClick={() => this.props.addTask()}>Add</button>

      </div>
    );
  }
}

export default NewTask;
