import React from "react"
import { withRouter } from "react-router-dom";

const Chair = function(props){
    
    return(
       <>
        <div onClick={() => props.history.push(`./queue/${props.barber.id}`)}></div>
            <div>{props.barber.fname}</div>
        <div className="chair-container">
            <div className="chair-container-barber-name">{props.barber.fname}</div>
            <img src={props.barber.image_url} alt="barber_url"/>
            <img src="/barber-chair.png" alt="barber-chair" />
            <div className="chair-container-barber-name">Time to Wait: 0 mins</div>
        </div>
       </>
    )
}

export default withRouter(Chair)