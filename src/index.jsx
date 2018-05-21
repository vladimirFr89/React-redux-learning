import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';

import reducer from './reducers';

document.addEventListener("DOMContentLoaded", function(event) {
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('react-app')
    );
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));