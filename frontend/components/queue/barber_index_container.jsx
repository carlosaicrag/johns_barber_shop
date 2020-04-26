import {connect} from "react-redux"
import Queues from "./barber_index"
import {getBarbers} from "../../actions/splash_actions"
import {openModal, reminderModal} from "../../actions/modal_actions"

const msp = function(store, ownProps){
  let barbers = ""
  let alreadyInQueue = false
  
  if(store.entities.users){
    barbers = store.entities.users
  }

  Object.keys(store.entities.clientHaircuts).forEach((clientHaircutKey) => {
    if (store.entities.clientHaircuts[clientHaircutKey].client_id == store.session.clientId) {
      alreadyInQueue = true
    }
  })

  return({
    modal: store.ui.modal,
    client: store.session.clientId,
    barbers: barbers,
    alreadyInQueue: alreadyInQueue    
  })
}

const mdp = function(dispatch){
  return({
    getBarbers: () => dispatch(getBarbers()),
    openModal: () => dispatch(openModal()),
    reminderModal: (modalWording) => dispatch(reminderModal(modalWording))
  })
}

export default connect(msp,mdp)(Queues)