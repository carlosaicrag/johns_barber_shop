import {connect} from "react-redux"
import Queues from "./queue"
import {getBarbers} from "../../actions/splash_actions"
import {openModal} from "../../actions/modal_actions"

const msp = function(store){
    let chairs = ""
    let barbers = ""
    
    if(store.entities.users){
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
        getBarbers: () => dispatch(getBarbers()),
        openModal: () => dispatch(openModal())
    })
}

export default connect(msp,mdp)(Queues)