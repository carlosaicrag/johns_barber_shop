import {connect} from "react-redux"
import ChooseHaircut from "./choose_haircut"
import {getHairCuts} from "../../actions/choose_haircut_actions"
import {fetchClientHaircut} from "../../actions/client_haircut_actions"
    
const msp = (state) => {
    return({
        client: state.session.clientId,
        barber: state.session.id,
        haircuts: Object.values(state.entities.haircuts),
        barbers: Object.values(state.entities.barbers)
    })
}

const mdp = (dispatch) => {
    return({
        fetchHaircuts: () => dispatch(getHairCuts()),
        fetchClientHaircut: (clientHaircut) => dispatch(fetchClientHaircut(clientHaircut))
    })
}

export default connect(msp,mdp)(ChooseHaircut)

