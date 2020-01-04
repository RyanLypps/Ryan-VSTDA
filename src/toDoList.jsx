import React, { Component } from 'react';

import ListItem from "./ListItem"

export default class ToDoList extends Component {
    //   4. Contains checkBox|listItem|editItem|deleteItem. Child of toDoList.
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card rounded">
                    <div className="card-header to-do">To Do</div>
                    <ul className="list-group">
                        {this.props.toDoList.map((property, index) => {
                            return (
                                <ListItem
                                    inputItem={property.inputItem}
                                    priorityForItem={property.priorityForItem}
                                    id={property.id}
                                    key={property.id}
                                    completed={property.completed}
                                    isBeingEdited={property.isBeingEdited}
                                    clickEdit={this.props.clickEdit}
                                    saveEdit={this.props.saveEdit}
                                    itemCompleted={this.props.itemCompleted}
                                    deleteItem={this.props.deleteItem} />     
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}


