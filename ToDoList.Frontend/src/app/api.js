import * as actions from "./actions/action-creators.js";

const API_ENDPOINT = "/api/todos";

export function loadTodos() {
    return dispatch => {
        fetch(API_ENDPOINT)
            .then(response => {
                response.json()
                    .then(todoList => {
                        dispatch(actions.showAll(todoList))
                    })
            })
    }
}

export function postTodo(todo) {
    return dispatch => {
        fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(response => {
                response.json()
                    .then(id => {
                        dispatch(actions.createTodo(Object.assign({}, todo, {id: id})))
                    })
            })
    }
}