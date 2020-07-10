import React from "react"

const ClientProfileHaircutIndexItem = function(props){
  return(
    <div className="client-profile-barber-barbershop-info-container">
      <div className="client-profile-barber-barbershop-name-working-date-timetaken">
        <div className="client-profile-barber-barbershop-name-working-container">
          <img className="client-profile-barber" src={props.clientHaircut.barberGravitar}/>
          <div className="client-profile-barber-barbershop-name-working">
            <div className="client-profile-barber-name">
              {props.clientHaircut.fname}, {props.clientHaircut.lname}
            </div>

            <div className="client-profile-barber-working">
              {props.clientHaircut.working ? "working" : "not working"}
            </div>
          </div>
        </div>
        <div className="client-profile-timetaken-date">
          <div className="client-profile-timetaken">
            time-taken(mins): {props.clientHaircut.timeTaken}
          </div>

          <div className="client-profile-date">
            {props.clientHaircut.date.month}, {props.clientHaircut.date.day}, {props.clientHaircut.date.year}
          </div>
        </div>
      </div>

      <div className="client-profile-haircut-haircutname">
        <img className="client-profile-haircut" src={props.clientHaircut.path} alt=""/>
        <div className="client-profile-haircutcutname">
          {props.clientHaircut.haircut_name}
        </div>
      </div>
    </div>
  )
}

export default ClientProfileHaircutIndexItem