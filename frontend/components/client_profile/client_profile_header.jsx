import React from "react";

const ClientProfileHeader = function (props) {
  return (
    <div className="client-profile-info-picture-name-joined">
      <img
        className="client-profile-picture"
        src={props.client.clientGravitar}
        alt=""
      />
      <div className="client-profile-name-container">
        <div className="client-profile-name">{props.client.fname}</div>
      </div>
      <div className="client-profile-joined-container">
        <div className="client-profile-joined">
          joined: {props.client.dateStarted.month}{" "}
          {props.client.dateStarted.day}, {props.client.dateStarted.year}
        </div>
      </div>

      <div className="client-profile-haircut-count-container">
        <div className="client-profile-haircut-count">
          number of haircuts: {props.client.clientHaircutCount}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ClientProfileHeader;
