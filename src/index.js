import React from 'react';
import Chatbox from './components/Chatbox/Chatbox';
import {createRoot} from 'react-dom/client'

const WIDGET_ID = 'react-chatbox-widget__container'
// Dynamically create a container for the chatbox
const container = document.getElementById(WIDGET_ID)

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Chatbox/>);
