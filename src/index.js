import React from 'react';
import {render} from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './style.sass';

import App from "./components/App";

render(
    <App/>,
    document.getElementById('root')
);
