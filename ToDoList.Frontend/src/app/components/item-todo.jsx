import React from 'react';
import "../../css/site.css";
import {connect} from "react-redux";
import {deleteTodo} from "../api.js";


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    }

    handleDeleteBtnClick(){
        this.props.dispatch(deleteTodo(this.props.id))
    }

    render() {
        return <li className="task-item row">
            <div className="col-md-3">
                <button className="btn btn-default" onClick={this.handleDeleteBtnClick}>Delete</button>
            </div>
            <div className="col-md-offset-3">{this.props.description}</div>
        </li>;
    }
}

export default connect()(TodoItem);