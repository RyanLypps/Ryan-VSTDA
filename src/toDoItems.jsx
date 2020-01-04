import React, { Component } from 'react';

export default class ToDoItems extends Component {
    // 2. Contains inputItem|priorityForItem|addButton to add. Child of App.
    constructor(props) {
        super(props);

        this.state = {
            inputItem: "",
            priorityForItem: "",
            clearText: "",
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState(
            { [e.target.name]: e.target.value }
        );
    }

    render() {
        return (
            <div className="container">
                <p></p>
                <div className="card rounded toDoItemsStyle">
                    <div className="card-header">Add Task</div>
                    <div className="card-body">
                        <div className="form-group">
                            <textarea name="inputItem" className="create-todo-text form-control" rows="4" id="inputItem" placeholder="I want to..." value={this.state.inputItem} onChange={this.handleClick}></textarea>
                        </div>
                        <div className="form-group">
                            <div className="priority-Item">
                                <label htmlFor="priorityForItem">Priority Level</label>
                            </div>
                            <select className="create-todo-priority form-control priority-button" id="priorityForItem" name="priorityForItem" value={this.state.priorityForItem} onChange={this.handleClick}>
                                <option>Select a Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Moderate</option>
                                <option value="3">Severe</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-footer footer-styling">
                        <div className="text-right">
                            <button name="addItem" className="add-button create-todo" onClick={() => this.props.addItemButton(this.state.inputItem, this.state.priorityForItem, this.state.clearText)}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

