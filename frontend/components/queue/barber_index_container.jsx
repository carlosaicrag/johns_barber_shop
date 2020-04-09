import {connect} from "react-redux"
import Queues from "./barber_index"
import {getBarbers} from "../../actions/splash_actions"
import {openModal, reminderModal} from "../../actions/modal_actions"


const msp = function(store, ownProps){
  let barbers = ""
  
  if(store.entities.users){
    barbers = store.entities.users
  }

  return({
    modal: store.ui.modal,
    client: store.session.clientId,
    barbers: barbers    
  })
}

const mdp = function(dispatch){
  return({
    getBarbers: () => dispatch(getBarbers()),
    openModal: () => dispatch(openModal()),
    reminderModal: () => dispatch(reminderModal())
  })
}

export default connect(msp,mdp)(Queues)