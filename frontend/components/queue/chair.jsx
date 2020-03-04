import React from "react"

const Chair = function(props){
    
    return(
        <div className="chair-container">
            <div className="chair-container-barber-name">{props.barber.fname}</div>
            {/* <img src={props.barber.image_url} alt="barber_url"/> */}
            <img src="/barber-chair.png" alt="barber-chair" />
            <div className="chair-container-barber-name">Time to Wait: 0 mins</div>
        </div>
    )
}

export default Chair