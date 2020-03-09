import React from "react"
import { withRouter } from "react-router-dom";

const Chair = function(props){
    return(
       
        <div onClick={() => props.history.push(`./queue/${props.barber.id}`)}>
            <div>{props.barber.fname}</div>
            <img src="/barber-chair.png" alt="barber-chair" />
        </div>
       
    )
}

export default withRouter(Chair)