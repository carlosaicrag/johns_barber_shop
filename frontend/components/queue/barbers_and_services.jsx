import React from "react"
import BarberIndexItem from "./barber_index_item";
import TimeTable from "./time_table";


const BarbersAndServices = function ({nextPrevBarber,state,barbers,client,remindToLogin}){
  let barberIcons = Object.values(barbers).map((barber, idx) => {
    return (
      <BarberIndexItem
        key={idx}
        client={client}
        barber={barber}
        remindToLogin={remindToLogin}
        nextPrevBarber={nextPrevBarber}
        waitTime={state[barber.id]}
      />
    )
  })

  return (
    <div className="queue-mobile-container">
      {barberIcons[state.barber]}
      <TimeTable
      state={state}
      barbers={barbers}
      />

      <div className="services-container">
        {/* <div className="services-options-container"> */}
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
        {/* </div> */}
      </div>
    </div>
  )
}

export default BarbersAndServices;