import {connect} from "react-redux"
import BarberQueue from "./barber_queue"
import {fetchQueue} from './../../actions/barber_actions'
import {updateBarberWorkingStatus} from './../../actions/barber_actions';
import {updateClientHaircutClosedAt} from './../../actions/client_haircut_actions';

const msp = function(state, ownProps){
  debugger
    if (Object.values(state.entities.queue).length !== 0){
        return({
            clientHaircutId: Object.values(state.entities.queue)[0].id,
            clientFirstName: Object.values(state.entities.queue)[0].clientFirstName,
            clientLastName: Object.values(state.entities.queue)[0].clientLastName,
            clientHaircut: Object.values(state.entities.queue)[0].clientHaircut,
            barberName: state.entities.users[state.session.id].fname,
            booleanWorking: state.entities.users[state.session.id].working,
            barberInfo: state.entities.users[state.session.id],
            numberOfPeopleWaiting: Object.values(state.entities.queue).length
        })
    } else {
        return({
            barberName: state.entities.users[state.session.id].fname,
            booleanWorking: state.entities.users[state.session.id].working,
            barberInfo: state.entities.users[state.session.id],
            numberOfPeopleWaiting: Object.values(state.entities.queue).length
        })
    }
}

const mdp = function(dispatch){
    return({
        fetchQueue: () => dispatch(fetchQueue()),
        updateClientHaircutClosedAt: (clientHaircutId, closedAt) => dispatch(updateClientHaircutClosedAt(clientHaircutId, closedAt)),
        updateBarberWorkingStatus: (barber) => dispatch(updateBarberWorkingStatus(barber))
    })
}

export default connect(msp,mdp)(BarberQueue)