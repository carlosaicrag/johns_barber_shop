import React from "react"
import BarberIndexItem from "./barber_index_item";
import TimeTable from "./time_table";

const BarbersAndServices = function ({nextPrevBarber,state,barbers,client,remindToLogin,alreadyInQueue, barberSession, handleCancelFailSafe, 
  cancelFailSafe,handleCancelClientHaircut, barberCancelingFrom, clientObject}){
  let barberIcons = Object.values(barbers).map((barber, idx) => {
    return (
      <BarberIndexItem
        key={idx}
        client={client}
        barber={barber}
        remindToLogin={remindToLogin}
        nextPrevBarber={nextPrevBarber}
        waitTime={state[barber.id]}
        clientWaitTime={state.clientWaitTime}
        alreadyInQueue={alreadyInQueue}
        barberSession={barberSession}
        handleCancelFailSafe={handleCancelFailSafe}
        cancelFailSafe={cancelFailSafe}
        handleCancelClientHaircut={handleCancelClientHaircut}
        barberCancelingFrom={barberCancelingFrom}
      />
    )
  })
  let timeLeft = null
  if (clientObject){
    timeLeft = <div> your wait time: {state.clientWaitTime} </div>
  }
  let closedMessage;
  if(barberIcons.length() === 0 ){
    closedMessage = <div>Sorry we are closed</div>
  }
  return (
    <div className="queue-mobile-container" onClick={() => cancelFailSafe ? handleCancelFailSafe(): ""}>
      {barberIcons.length() === 0 ? closedMessage : barberIcons[state.barber]}
      {timeLeft}
      <TimeTable
      state={state}
      barbers={barbers}
      />

      <div className="services-container">
        <div className="chair-nextarrow-waittime-newhaircut-opacity">
          <div className="services-title">Services</div>
          <div className="services-cell-container">
            <div>
              <div>service1 $10</div>
              <div>service1 $10</div>
              <div>service1 $10</div>
              <div>service1 $10</div>
            </div>
              
            <div>
              <div>service1 $10</div>
              <div>service1 $10</div>
              <div>service1 $10</div>
              <div>service1 $10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarbersAndServices;