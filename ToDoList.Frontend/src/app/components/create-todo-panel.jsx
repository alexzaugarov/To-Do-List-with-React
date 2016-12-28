import React from "react";

export default class CreateTodoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            this.props.onTaskCreated(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="What needs to be done?" onKeyDown={this.handleKeyDown}/>
            </div>
        );
    }
}