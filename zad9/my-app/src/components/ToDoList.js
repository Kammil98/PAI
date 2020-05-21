import React, { Component } from 'react';
import taskContentList from '../TaskContentList'
import Task from "./Task";

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      tasks : taskContentList
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
      this.setState(prevState => {
          const updatedTasks = prevState.tasks.map(task => {
              if (task.id === id) {
                  return{
                    ...task,
                    completed: !task.completed
                  }
              }
              return task
          })
          return {
              tasks: updatedTasks
          }
      })
  }
  isUndone(task){
    if(this.props.filter===true)
      return task.completed === false;
    return true;
  }

  componentDidUpdate(){
    if(taskContentList.length > this.state.tasks.length){
      this.setState(prevState =>{
          return{
            tasks : taskContentList
          }
        });
    }
  }
  render() {
    const tasksList0 = this.state.tasks.filter((item) => {
      return this.isUndone(item);
    })
    const tasksList = tasksList0.map(item => <Task key={item.id} item={item}
          handleChange={this.handleChange}/>);
    return (
      <div className="ToDoList">
        {tasksList.length >0 ? tasksList : "Nothin to do..."}
      </div>
    );
  }
}

export default ToDoList;
