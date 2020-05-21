import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <input type="checkbox" id="checkboxHide"
              onChange={() => this.props.hiding(event)}/>
        <label className="hideCompleted">
          hide completed
        </label>
      </div>
    );
  }
}

export default Filter;
