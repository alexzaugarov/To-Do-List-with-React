import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoListApp from "./TodoListApp.jsx";
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <TodoListApp />
    </Provider>,
    document.getElementById('root')
);