import React from 'react';
import { Link } from "react-router-dom";

function ReminderModal({wording}){
  const displayRemindToSignUpOrLogin = function (){
    return(
    <div className="reminder">
      <div className="hey">Oh, hey there!</div>
      <div className="reminder-options">
        Please   <Link className="option-link" to="/signup">sign up</Link> or <Link className="option-link" to="/login">login</Link> before scheduling a new look!
      </div>
    </div>
    )
  }

  const displayRemindAlreadyInQueue = function () {
    return(
    <div className="reminder">
      <div className="reminder-options">
        Sorry, looks like you're already in a barbers queue. Please wait for your turn.
      </div>
    </div>
    )
  }
  return(
    wording === "notSignedIn" ? displayRemindToSignUpOrLogin() : displayRemindAlreadyInQueue()
  )
};

export default ReminderModal;