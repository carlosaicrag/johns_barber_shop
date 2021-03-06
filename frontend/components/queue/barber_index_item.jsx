import React from "react"
import {Link} from "react-router-dom"

const BarberMobile = function (props) {
  let newHaircut;

  const handleCancelHaircut = function(){
    if (props.cancelFailSafe){
      props.handleCancelClientHaircut(props.barberCancelingFrom);
    }else{
      props.handleCancelFailSafe()
    }
  }

  if(props.barberSession){
    newHaircut = <div></div>
  }else if(!props.client || props.alreadyInQueue){
    if (!props.client){
      newHaircut = <div onClick={() => props.remindToLogin("notSignedIn")}> New Haircut </div>
    }else{
      let cancelHaircutWording = ""
      props.cancelFailSafe ? cancelHaircutWording = "Are You Sure?" : cancelHaircutWording = "Cancel Haircut"
      newHaircut = <div onClick={() => handleCancelHaircut()}> {cancelHaircutWording} </div>
    }
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
            <img src={props.barber.barberGravitar} alt="barber_url" />
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