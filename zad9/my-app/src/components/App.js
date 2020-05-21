import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Header from "./Header";
import Filter from "./Filter";
import ToDoList from "./ToDoList";
import NewTask from "./NewTask";
import taskContentList from '../TaskContentList';
import hiddenContentList from '../HiddenTasksList';

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
    this.setState({inputValue: evt.target.value});
  }

  addTask(){
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
    const hideDoneTasks=false;

    return (
      <div className="App">
        <Header
        hideDoneTasks/>
        <fieldset>
          <Filter
            hiding = {this.hiding}/>
          <hr/>
          <ToDoList
            filter = {this.state.hideDone}
            hideDone = {this.state.hideDone}
            actualList = {this.state.actualList}/>
          <hr/>
          <NewTask
              updateInputValue={this.updateInputValue}
              addTask={this.addTask}/>
        </fieldset>
      </div>
    );
  }
}

export default App;
