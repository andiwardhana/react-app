import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import { Router } from 'react-router';

it ("renders without crashing", () => {
    const div = document.createElement("Router");
    ReactDOM.render(<Fragment></Fragment>, Router)
})