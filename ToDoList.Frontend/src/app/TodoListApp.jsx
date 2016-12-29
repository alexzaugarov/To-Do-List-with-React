import React from 'react';
import {render} from 'react-dom';
import TaskList from "./components/list-todo.jsx";
import Header from "./components/create-todo-panel.jsx";

export default class TodoListApp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-4 center-block">
                    <Header/>
                    <TaskList/>
                </div>
            </div>
        );
    }
}