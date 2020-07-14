import { connect } from "react-redux"
import Queues from "./barber_index"
import { getBarbers } from "../../actions/splash_actions"
import { cancelClientHaircut } from "../../actions/client_haircut_actions"
import { openModal, reminderModal } from "../../actions/modal_actions"

const msp = function (store, ownProps) {
  let barbers = ""
  let alreadyInQueue = false
  let clientHaircutId = ""
  let barberCancelingFrom = ""

  if (store.entities.barbers) {
    barbers = store.entities.barbers
  }

  Object.keys(store.entities.clientHaircuts).forEach((clientHaircutKey) => {
    let clientHaircut = store.entities.clientHaircuts[clientHaircutKey]
    if (clientHaircut.client_id == store.session.clientId) {
      alreadyInQueue = true
      clientHaircutId = clientHaircutKey
      barberCancelingFrom = store.entities.barbers[clientHaircut.barber_id]
    }
  })
  
  return ({
    modal: store.ui.modal,
    client: store.session.clientId,
    clientObject: store.entities.clients[store.session.clientId],
    barberSession: store.session.id,
    barbers: barbers,
    alreadyInQueue: alreadyInQueue,
    clientHaircutId,
    barberCancelingFrom
  })
}

const mdp = function (dispatch) {
  return ({
    getBarbers: () => dispatch(getBarbers()),
    openModal: () => dispatch(openModal()),
    reminderModal: (modalWording) => dispatch(reminderModal(modalWording)),
    cancelClientHaircut: (clientHaircutId) => dispatch(cancelClientHaircut(clientHaircutId))
  })
}

export default connect(msp, mdp)(Queues)