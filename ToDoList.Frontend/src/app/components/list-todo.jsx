import React from "react";
import {connect} from 'react-redux';
import TodoItem from "./item-todo.jsx"
import {loadTodos} from "../api.js";

class TodoList extends React.Component {
    componentDidMount(){
        this.props.dispatch(loadTodos());
    }

    render() {
        var items = [];

        this.props.items.forEach(item => {
            items.push(<TodoItem description={item.description}/>);
        });

        return <div>{items}</div>;
    }
}

const mapStateToProps = function (store) {
    return {
        items: store.todoListState.items
    };
};

export default connect(mapStateToProps)(TodoList);