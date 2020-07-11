import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import { Router } from 'react-router';

it ("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home/>, div)
})