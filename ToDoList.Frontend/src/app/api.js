import * as actions from "./actions/action-creators.js";

const API_ENDPOINT = "http://localhost:5000/api/todos";

export function loadTodos() {
    return dispatch => {
        fetch(API_ENDPOINT, {mode: 'cors'})
            .then(response => {
                response.json()
                    .then(todoList => {
                        dispatch(actions.showAll(todoList))
                    })
            })
    }
}

export function postTodo(todo) {
    console.log(serialize(todo));
    return dispatch => {
        fetch(API_ENDPOINT, {
            method: "post",
            body: serialize(todo),
            mode: 'cors'
        })
            .then(response => {
                response.json()
                    .then(id => {
                        dispatch(actions.createTodo(Object.assign({}, todo, {id: id})))
                    })
            })
    }
}

function serialize(obj){
    var data = new FormData();
    data.append( "json", JSON.stringify( obj ) );
    return data;
}