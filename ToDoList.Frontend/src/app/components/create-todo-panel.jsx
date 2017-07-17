import React from "react";
import {postTodo} from "../api";
import {connect} from "react-redux";

class CreateTodoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            this.props.dispatch(postTodo({
                description: e.target.value,
                isCompleted: false
            }));

            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <input className="form-control" type="text" placeholder="What needs to be done?" onKeyDown={this.handleKeyDown}/>
            </div>
        );
    }
}

export default connect()(CreateTodoPanel);