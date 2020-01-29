import React from "react"

const Chair = function(props){
    debugger
    return(
        <div>
            <div>{props.barber.fname}</div>
            <img src="/barber-chair.png" alt="barber-chair" />
        </div>
    )
}

export default Chair