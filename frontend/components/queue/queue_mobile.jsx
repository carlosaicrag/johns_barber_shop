import React from "react";
import BarberMobile from "./chair_mobile";

const QueueMobile = function ({nextPrevBarber,state,barbers, chairs, client, remindToLogin, loggedInBarber}){
    const rows = Object.values(barbers);
    let barberIcons = Object.values(barbers).map((barber, idx) => {

        return (
            <BarberMobile
                key={idx}
                client={client}
                barber={barber}
                remindToLogin={remindToLogin}
                nextPrevBarber={nextPrevBarber}
                waitTime={barber.queueTime}
                loggedInBarber={loggedInBarber}
            />
        )
    })

    let nameRow = {}

    let makeNameRow = () => {
        rows.forEach((barber) => {
            nameRow[barber.fname] = barber.fname
        })
    }
    
    makeNameRow()

    let waitTimeRow = {}

    let makeWaitTimeRow = () => {
        // waitTimeRow["Wait Time"] = "Wait Time"

        rows.forEach((barber) => {
            waitTimeRow[barber.fname] = barber.queueTime
        })
    }
    makeWaitTimeRow()

    let table = <div></div>

    let makeTable = () =>{
        return(
            <div className="table">
                <div className="wait-times">Wait Times</div>
                <div className="table-row">
                {Object.values(nameRow).map((value,idx) => {
                    return(
                        <div className="row-cell">
                            <div>{value}</div>
                            <div>{Object.values(waitTimeRow)[idx]}</div>
                            <div>mins</div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
        
    }

    return (
        <div className="queue-mobile-container">
            {barberIcons[state.barber]}
            {makeTable()}

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

export default QueueMobile;