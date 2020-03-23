import {connect} from "react-redux"
import Queues from "./queue"
import {getChairs} from "../../actions/splash_actions"
import {openModal} from "../../actions/modal_actions"


const msp = function(store, ownProps){
    let chairs = ""
    let barbers = ""
    
    if(store.entities.chairs){
        chairs = Object.values(store.entities.chairs)
        barbers = store.entities.users
    }
    return({
        chairs: chairs,
        barbers: barbers    
    })
}

const mdp = function(dispatch){
    return({
        getChairs: () => dispatch(getChairs()),
        openModal: () => dispatch(openModal())
    })
}

export default connect(msp,mdp)(Queues)