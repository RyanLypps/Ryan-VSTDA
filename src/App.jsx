import React, { Component } from 'react';

import ToDoItems from "./toDoItems";
import ToDoList from "./toDoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      id: 0,
    };

    this.addItemButton = this.addItemButton.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItemButton(inputItem, priorityForItem, clearText) {
    let newToDoItem = {
      inputItem: inputItem,
      priorityForItem: priorityForItem,
      id: this.state.id++,
      clearText: clearText,
      completed: false,
      isBeingEdited: false
    }
    this.state.toDoList.push(newToDoItem);
    this.setState({
      toDoList: this.state.toDoList
    });
  };

  clickEdit(id) {
    let editItem = this.state.toDoList;
    for (let i = 0; i < editItem.length; i++) {
      if (editItem[i].id == id) {
        editItem[i].isBeingEdited = true;
      }
    }
    this.setState({
      toDoList: editItem
    });
  }

  saveEdit(id, inputItem, priorityForItem) {
    let saveItem = this.state.toDoList;
    for (let i = 0; i < saveItem.length; i++) {
      if (saveItem[i].id == id) {
        saveItem[i].isBeingEdited = false;
        saveItem[i].inputItem = inputItem;
        saveItem[i].priorityForItem = priorityForItem;
      }
    }
    this.setState({
      toDoList: saveItem
    });
  }

  deleteItem(id) {
    let deleteItem = this.state.toDoList.filter((itemById) => {
      if (itemById.id !== id) {
        return itemById;
      }
    });
    this.setState({
      toDoList: deleteItem
    });
  }


  itemCompleted(id) {
    let completeItem = this.state.toDoList;
    for (let i = 0; i < completeItem.length; i++) {
      if (completeItem[i].id == id) {
        completeItem[i].completed = !completeItem[i].completed;
      }
    }
    this.setState({
      toDoList: completeItem
    })
  }

  render() {
    return (
      <div className="container">
        <div id="title">
          <div className="row well border-bottom border-dark rounded-top">
            <span className="col-lg-12 d-flex justify-content-center">
              <header><h1 className="h1">To Do App</h1></header>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ToDoItems
              addItemButton={this.addItemButton} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7 item-list">
            <p></p>
            <ToDoList
              toDoList={this.state.toDoList}
              clickEdit={this.clickEdit}
              saveEdit={this.saveEdit}
              itemCompleted={this.itemCompleted}
              deleteItem={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
