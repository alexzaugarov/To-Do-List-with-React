import * as types from "./action-types.js";

export function createTodo(todo) {
    return {
        type: types.CREATE_TODO,
        todo
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function showAll(items) {
    return {
        type: types.SHOW_ALL,
        items
    }
}