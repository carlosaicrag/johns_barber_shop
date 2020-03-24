import {connect} from "react-redux"
import BarberQueue from "./barber_queue"
import {getChairs} from "../../actions/splash_actions"
import {fetchQueue} from './../../actions/barber_actions'

const msp = function(state, ownProps){
    // debugger
    return({
        barbers: Object.values(state.entities.users)
    })
}

const mdp = function(dispatch){
    return({
        getChairs: () => dispatch(getChairs()),
        fetchQueue: () => dispatch(fetchQueue())
    })
}

export default connect(msp,mdp)(BarberQueue)