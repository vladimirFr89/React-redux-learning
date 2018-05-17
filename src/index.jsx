import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    INIT_EDIT_TODO
} from './ActionTypes'

document.addEventListener("DOMContentLoaded", function(event) {
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('react-app')
    );
});

const initState = [];

const delToDo = (state, action)=>{
    switch (action.type) {
        case DELETE_TODO:
            const newState = [];
            state.forEach((item, index) => {
                if (index!== action.id) {
                    newState.push(item);
                }
            });

            return newState;
            break;
        default:
            return state;
    }
};

const prepareToEdit = (state, action) => {
    switch (action.type) {
        case INIT_EDIT_TODO:
            const newState = [];
            state.forEach((item, index)=>{
                if (index === action.id){
                    item.isEditing = true;
                }
                newState.push(item);
            });

            return newState;
            break;
        default:
            return state;
    }
};

const editToDo = (state, action) => {
    switch (action.type) {
        case EDIT_TODO:
            const newState = [];
            state.forEach((item, index)=>{
                if (index === action.id){
                    item.text = action.text;
                    item.isEditing = false;
                }
                newState.push(item);
            });

            return newState;
            break;
        default:
            return state;
    }
};

const todoApp = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    isEditing: false
                }
            ];
            break;

        case DELETE_TODO:
            return delToDo(state, action);
            break;

        case INIT_EDIT_TODO:
            return prepareToEdit(state, action);
            break;

        case EDIT_TODO:
            return editToDo(state, action);
            break
        default:
            return state;
    }
};

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() =>
//     console.log(store.getState())
// );

function counter(state = initState, action) {
    // switch (action.type) {
    //     case 'INCREMENT':
    //         return state + 1
    //     case 'DECREMENT':
    //         return state - 1
    //     default:
    //         return state
    // }
    return state;
}
