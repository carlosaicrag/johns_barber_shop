import {connect} from "react-redux"
import Queues from "./queue"
import {getBarbers} from "../../actions/splash_actions"
import {openModal} from "../../actions/modal_actions"


const msp = function(store, ownProps){
    let barbers = ""
    
    if(store.entities.users){
        barbers = store.entities.users
    }
    return({
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