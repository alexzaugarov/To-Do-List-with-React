import React from 'react';
import {render} from 'react-dom';
import TaskList from "./TodoList/Components/TodoList.jsx";
import Header from "./TodoList/Components/CreateTodoPanel.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskItems: [
                { description: "asd" },
                { description: "qwe" },
                { description: "zxc" }
            ]
        };

        this.onTaskCreated = this.onTaskCreated.bind(this);
        console.log(typeof this.onTaskCreated);
    }

    onTaskCreated(description) {
        this.setState(prevState => ({
            taskItems: prevState.taskItems.concat([{ description: description }])
        }));
    }

    render () {
        return (
            <div className="container">
                <div className="col-md-4 center-block">
                    <Header onTaskCreated={this.onTaskCreated}/>
                    <TaskList taskItems={this.state.taskItems}/>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));