import * as types from "../actions/action-types";

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SHOW_ALL:
            return Object.assign({}, state, {items: action.items});
        case types.CREATE_TODO:
            return Object.assign({}, state, {items: state.items.concat([action.todo])});
        case types.DELETE_TODO:
            return Object.assign({}, state, {items: state.items.filter(i => i.id !== action.id)});
        default:
            return state;
    }
}