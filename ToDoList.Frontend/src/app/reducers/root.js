import { combineReducers } from 'redux';

// Reducers
import listReducer from './list-reducer.jsx';

// Combine Reducers
var reducers = combineReducers({
    todoListState: listReducer
});

export default reducers;
