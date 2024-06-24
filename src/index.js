import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './components/Chatbox/Chatbox';

const WIDGET_ID = 'react-chatbox-widget__container'
// Dynamically create a container for the chatbox
const container = document.createElement('div');
container.id = WIDGET_ID;
document.body.appendChild(container);

// Render the React component into the container
ReactDOM.render(<Chatbox/>, document.getElementById(WIDGET_ID));
