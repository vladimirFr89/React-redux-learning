import React from 'react';
import {render} from 'react-dom';

document.addEventListener("DOMContentLoaded", function(event) {
    render(
        <h2>This is react!!</h2>,
        document.getElementById('react-app')
    );
});