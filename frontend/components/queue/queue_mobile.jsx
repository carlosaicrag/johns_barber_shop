import React from "react"
import ChairMobile from "./chair_mobile"

const QueueMobile = function ({nextPrevBarber,state,barbers, chairs}){
    const rows = Object.values(barbers);

    let chairIcons = chairs.map((chair, idx) => {
        let barberId = chair.barber_id

        return (
            <ChairMobile
                key={idx}
                barber={barbers[barberId]}
                nextPrevBarber={nextPrevBarber}
            />
        )
    })

    let nameRow = {}

    let makeNameRow = () => {
        nameRow["Barbers"] = "Barbers"

        rows.forEach((barber) => {
            nameRow[barber.fname] = barber.fname
        })
    }
    makeNameRow()

    let waitTimeRow = {}

    let makeWaitTimeRow = () => {
        waitTimeRow["Wait Time"] = "Wait Time"

        rows.forEach((barber) => {
            waitTimeRow[barber.fname] = barber.id
        })
    }
    makeWaitTimeRow()

    let table = <div></div>

    let makeTable = () =>{
        return(
            <div className="table">
                <div className="table-row">
                {Object.values(nameRow).map((value) => {
                    return(
                        <div className="row-cell">{value}</div>
                    )
                })}
                </div>
                <div className="table-row">
                {Object.values(waitTimeRow).map((value) => {
                    return (
                        <div className="row-cell">{value}</div>
                    )
                })}
                </div>
            </div>
        )
        
    }

    return (
        <div className="queue-mobile-container">
            {chairIcons[state.barber]}
            {makeTable()}
        </div>
    )
}

export default QueueMobile;