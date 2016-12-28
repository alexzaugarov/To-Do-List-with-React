import React from "react";
import TodoItem from "./item-todo.jsx"

export default class TodoList extends React.Component {
    render() {
        var tasks = [];

        this.props.taskItems.forEach(item => {
            tasks.push(<TodoItem description={item.description}/>);
        });

        return <div>{tasks}</div>;
    }
}