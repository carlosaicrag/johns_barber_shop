import React from "react"

const TimeTable = function({state,barbers}){
  const rows = Object.values(barbers);
  let nameRow = {}
  
  let makeNameRow = () => {
    rows.forEach((barber) => {
      nameRow[barber.fname] = barber.fname
    })
  }
  makeNameRow()

  let waitTimeRow = {}

  let makeWaitTimeRow = () => {
    rows.forEach((barber) => {
      waitTimeRow[barber.fname] = state[barber.id]
    })
  }
  makeWaitTimeRow()

  let makeTable = () => {
    return (
      <div className="table">
        <div className="wait-times">Wait Times</div>
        <div className="table-row">
          {Object.values(nameRow).map((value, idx) => {
            return (
              <div className="row-cell" key={idx}>
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

  return(
    makeTable()
  )
}

export default TimeTable