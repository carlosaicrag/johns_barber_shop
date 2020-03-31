import React from 'react';
import { Link } from "react-router-dom";

function ReminderModal(){
  return(
    <div className="reminder">
      <div className="hey">Oh, hey there!</div> 
      <div className="reminder-options">
        Please   <Link className="option-link" to="/signup">sign up</Link> or <Link className="option-link" to="/login">login</Link> before scheduling a new look!
      </div>
    </div>
  )
};

export default ReminderModal;