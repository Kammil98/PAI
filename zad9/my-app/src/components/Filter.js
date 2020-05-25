import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <input type="checkbox" id="checkboxHide"
              name="hideDone"
              checked={this.props.hideDone}
              onChange={() => this.props.updateValue(event)}/>
        <label className="hideCompleted">
          hide completed
        </label>
      </div>
    );
  }
}

export default Filter;
