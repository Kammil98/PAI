import React, { Component } from 'react';

class NewTask extends Component {


  render() {
    return (
      <div className="NewTask">
          <input type="text" name="inputValue" value={this.props.text} onChange={() => this.props.updateValue(event)}/>
          <button onClick={() => this.props.addTask()}>Add</button>
      </div>
    );
  }
}

export default NewTask;
