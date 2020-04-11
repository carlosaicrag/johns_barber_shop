import React from "react"
import {Link} from "react-router-dom"

const BarberMobile = function (props) {
    let newHaircut;
    if (props.loggedInBarber ){
        newHaircut = null;
    } else if(!props.client){
        newHaircut = <div onClick={() => props.remindToLogin()}> New Haircut </div>
    } else {
        newHaircut = <Link to="/chooseHaircut"> New Haircut</Link>
    }
    return (
        <div className="chair-nextarrow-waittime-newhaircut">
            <div className="chair-nextarrow-waittime-newhaircut-opacity">    
            <div className="chair-nextarrow-waittime-container">
                <div className="chair-nextarrow-container">
                    <div className="next-button" onClick={props.nextPrevBarber("left")}>
                        <i className="fas fa-arrow-circle-left"></i>
                    </div>
                    <div className="chair-container-mobile">
                        <div className="chair-container-barber-name">{props.barber.fname}</div>
                        <img src={props.barber.image_url} alt="barber_url" />
                        {/* <img src="/barber-chair.png" alt="barber-chair" /> */}
                    </div>
                    <div className="next-button" onClick={props.nextPrevBarber("right")}>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                </div>
            </div>
            <div className="wait-time-new-haircut-container">
                <div className="chair-container-barber-name">Wait: {props.waitTime} mins</div>
                {newHaircut}
            </div>
            </div>
        </div>
    )
}

export default BarberMobile