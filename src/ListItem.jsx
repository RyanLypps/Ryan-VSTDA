
import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputItem: this.props.inputItem,
            priorityForItem: this.props.priorityForItem,
            isBeingEdited: this.props.isBeingEdited,
        };

        this.handleClick = this.handleClick.bind(this)
        this.setPriorityColor = this.setPriorityColor.bind(this)
        this.displayEdit = this.displayEdit.bind(this)
        this.displayItem = this.displayItem.bind(this)
        this.completedLine = this.completedLine.bind(this)
    }

    handleClick(e) {
        this.setState(
            { [e.target.name]: e.target.value }
        );
    }

    completedLine(completed) {
        if (completed) {
            return "line-through dotted";
        } else {
            "none"
        }
    }


    setPriorityColor(priority) {
        if (priority == 1) {
            return "list-group-item-success"
        } else if (priority == 2) {
            return "list-group-item-warning"
        } else if (priority == 3) {
            return "list-group-item-danger"
        }
    }

    displayEdit(isBeingEdited) {
        if (isBeingEdited == true) {
            return "block";
        } else {
            return "none";
        }
    }

    displayItem(isBeingEdited) {
        if (isBeingEdited == true) {
            return "none";
        } else {
            return "block";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="Edit" name="Edit" style={{ display: this.displayItem(this.props.isBeingEdited) }}>
                    <hr className={`${this.setPriorityColor(this.props.priorityForItem)} `}></hr>
                    <li className={`${this.setPriorityColor(this.props.priorityForItem)} clearfix `}>
                        <input type="checkbox" className="align-middle styleCheckBox" onChange={() => this.props.itemCompleted(this.props.id)} />
                        <div className="align-middle styleInputItem" id="display-text" style={{ textDecoration: this.completedLine(this.props.completed) }}>
                            {this.props.inputItem}
                        </div>
                        <a className='delete-todo btn float-right text-success align-middle' onClick={() => this.props.deleteItem(this.props.id)} name='delete-todo' href='#' style={{ cursor: 'pointer' }}>
                            <i className="fa fa-minus-circle" style={{ color: '#951717' }}></i>
                        </a>
                        <a className='edit-todo btn float-right text-success align-middle' onClick={() => this.props.clickEdit(this.props.id)} name='editButton' href='#'>
                            <i className="fa fa-pencil-square-o" style={{ color: '#42403C' }} ></i>
                        </a>
                    </li>
                    <hr className={`${this.setPriorityColor(this.props.priorityForItem)} `}></hr>
                </div>
                <div className="editItem" name="editItem" style={{ display: this.displayEdit(this.props.isBeingEdited) }}>
                    <ul className={`${this.setPriorityColor(this.props.priorityForItem)} clearfix `} id="styleEditBox">
                        <div className="form-group">
                            <label htmlFor="comment">Edit Task</label>
                            <textarea className="update-todo-text form-control" rows="4" id="comment" placeholder="Edit your task..." name="inputItem" onChange={this.handleClick} value={this.state.inputItem}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="priorityForItem">Priority Level</label>
                            <select className="update-todo-priority form-control mb-4" id="priority" name="priorityForItem" onChange={this.handleClick} value={this.state.priorityForItem}>
                                <option value="1">Low</option>
                                <option value="2">Moderate</option>
                                <option value="3">Severe</option>
                            </select>
                            <div className="form-group">
                                <div className="text-right">
                                    <button className="update-todo btn btn-primary btn-lg styleSaveButton" onClick={() => this.props.saveEdit(this.props.id, this.state.inputItem, this.state.priorityForItem)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    };
}