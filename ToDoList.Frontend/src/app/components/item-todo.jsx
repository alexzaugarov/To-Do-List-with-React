import React from 'react';

export default class TodoItem extends React.Component {
    render() {
        return <div className="task-item">{this.props.description}</div>;
    }
}