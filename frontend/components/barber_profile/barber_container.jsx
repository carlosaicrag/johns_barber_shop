import { connect } from "react-redux"
import BarberQueue from "./barber_queue"
import { fetchQueue } from './../../actions/barber_actions'
import { updateBarberWorkingStatus } from './../../actions/barber_actions';
import { closeClientHaircut } from './../../actions/client_haircut_actions';

const msp = function (state, ownProps) {
  let timeElapsed = {}

  if (state.entities.queue.timeElapsed) {
    timeElapsed = state.entities.queue.timeElapsed
  }

  return ({
    clientHaircutId: state.entities.queue.id,
    clientFirstName: state.entities.queue.clientFirstName,
    clientLastName: state.entities.queue.clientLastName,
    clientHaircut: state.entities.queue.clientHaircut,
    barberName: state.entities.barbers[state.session.id].fname,
    booleanCuttingHair: state.entities.barbers[state.session.id].cutting_hair,
    barberInfo: state.entities.barbers[state.session.id],
    numberOfPeopleWaiting: state.entities.queue.queueLength,
    timeElapsed: state.entities.queue.timeElapsed
  })
}

const mdp = function (dispatch) {
  return ({
    fetchQueue: () => dispatch(fetchQueue()),
    closeClientHaircut: (clientHaircutId) => dispatch(closeClientHaircut(clientHaircutId)),
    updateBarberWorkingStatus: (barber) => dispatch(updateBarberWorkingStatus(barber))
  })
}

export default connect(msp, mdp)(BarberQueue)