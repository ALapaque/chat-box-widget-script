import React, {useEffect} from 'react';
import './Chatbox.css';

const Chatbox = () => {
  useEffect(() => {
    console.log('Chatbox > widget parameters', {
      entityId: window.entityId,
      token: window.restoBookingToken
    });
  }, []);

  return (
    <div id='chatbox-container'>
      <div id='chatbox-header'>Chat with us!</div>
      <div id='chatbox-body'>
        <p>Welcome to our chat service. How can we help you today?</p>
      </div>
    </div>
  );
};

export default Chatbox;
