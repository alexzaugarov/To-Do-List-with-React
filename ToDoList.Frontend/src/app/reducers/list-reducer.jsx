import * as types from "../actions/action-types";

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SHOW_ALL:
            var newState = Object.assign({}, state, {items: action.items});
            console.log(newState);
            return newState;
        case types.CREATE_TODO:
            var newState = Object.assign({}, state, {items: state.items.concat([action.todo])});
            console.log(newState);
            return newState;
        case types.DELETE_TODO:
            return Object.assign({}, state, {items: state.items.filter(i => i.id != action.todo.id)});
        default:
            return state;
    }
}