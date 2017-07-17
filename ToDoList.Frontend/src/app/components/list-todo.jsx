import React from "react";
import {connect} from 'react-redux';
import TodoItem from "./item-todo.jsx"
import {loadTodos} from "../api.js";

class TodoList extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadTodos());
    }

    render() {
        return <div className="row">
            <ul className="list-unstyled col-md-12">
                {this.props.items.map(item => <TodoItem key={item.id} id={item.id} description={item.description}/>)}
            </ul>
        </div>;
    }
}

const mapStateToProps = function (store) {
    return {
        items: store.todoListState.items
    };
};

export default connect(mapStateToProps)(TodoList);