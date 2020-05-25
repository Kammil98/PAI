import React, { Component } from 'react';
import '../styles/App.css';
import Header from "./Header";
import Filter from "./Filter";
import ToDoList from "./ToDoList";
import NewTask from "./NewTask";
import taskContentList from '../TaskContentList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      idCounter : 4,
      hideDone : false
    }
    this.addTask = this.addTask.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.hiding = this.hiding.bind(this);
  }

  hiding(evt){
      this.setState(prevState =>{
        return{
          hideDone : !prevState.hideDone
        }
      });
  }

  updateInputValue(evt){
    const {name, value, type, checked} = evt.target;
    type ==="checkbox" ? this.setState({[name]: checked})
                        : this.setState({[name]: value});
  }

  addTask(event){
    console.log("dzialam");
    this.setState(prevState =>{
        return{
          idCounter: prevState.idCounter + 1
        }
      });
    this.setState();
    taskContentList.push({
      id: this.state.idCounter,
      text: this.state.inputValue,
      completed: false
    });
  }

  render() {
    return (
      <div className="App">
        <Header
        hideDoneTasks/>
        <fieldset>
          <Filter
            hideDone={this.state.hideDone}
            updateValue={this.updateInputValue}/>
          <hr/>
          <ToDoList
            filter={this.state.hideDone}
            hideDone={this.state.hideDone}
            actualList={this.state.actualList}/>
          <hr/>
          <NewTask
              text={this.state.inputValue}
              updateValue={this.updateInputValue}
              addTask={this.addTask}/>
        </fieldset>
      </div>
    );
  }
}

export default App;
