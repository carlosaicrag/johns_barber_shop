import {connect} from "react-redux"
import ChooseHaircut from "./choose_haircut"
import {getHairCuts} from "../../actions/choose_haircut_actions"
    
const msp = (state) => {
    return({
        haircuts: Object.values(state.entities.haircuts)
    })
}

const mdp = (dispatch) => {
    return({
        fetchHaircuts: () => dispatch(getHairCuts())
    })
}

export default connect(msp,mdp)(ChooseHaircut)

