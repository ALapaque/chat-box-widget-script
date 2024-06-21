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

(function() {
  // Create the iframe
  var iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.bottom = '10px';
  iframe.style.right = '10px';
  iframe.style.height = '500px'; // Adjust the size as needed
  iframe.style.width = '300px'; // Adjust the size as needed
  iframe.style.border = 'none';

  // Append the iframe to the body
  document.body.appendChild(iframe);

  // Get the iframe document
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Write the HTML content to the iframe
  iframeDoc.open();
  iframeDoc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chatbox Widget</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="https://alapaque.github.io/chat-box-widget-script/dist/bundle.js"></script> <!-- Adjust the path as needed -->
    </body>
    </html>
  `);
  iframeDoc.close();
})();

