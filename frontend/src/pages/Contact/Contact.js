import React from 'react';
import Message from './Message/Message';
import './Contact.css';
function Contact() {
  return (
    <div className="column-container">
      <div className="row">
        <div className="col">
          <h1><b>Contact Us</b></h1>
          <p><b>Feel free to reach out to us using the address below:</b></p>
          <address>
            <b>6/10,Muthur main road,</b>
            <br></br>
           <b> Lakkapuram,</b>
            <br></br>
            <b>Erode-638001</b>
          </address>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <Message/>
    </div>
  );
}

export default Contact;
