import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './App';

document.addEventListener("DOMContentLoaded", function(event) {
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('react-app')
    );
});

const store = createStore(counter);

store.subscribe(() =>
    console.log(store.getState())
);

function counter(state = 100, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
