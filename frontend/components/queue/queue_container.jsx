import {connect} from "react-redux"
import Queues from "./queue"
import {getChairs} from "../../actions/splash_actions"

const msp = function(store){
    let chairs = ""
    let barbers = ""

    if(store.entities.chairs){
        chairs = Object.values(store.entities.chairs)
        barbers = Object.values(store.entities.chairs)
    }
    debugger
    return({
        chairs: chairs,
        barbers: barbers    
    })
}

const mdp = function(dispatch){
    return({
        getChairs: () => dispatch(getChairs())
    })
}

export default connect(msp,mdp)(Queues)