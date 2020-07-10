import ClientProfileIndex from "./client_profile_index"
import {fetchClients} from "../../actions/client_actions"
import {connect} from "react-redux"

const msp = (store,ownProps) => {
  return{
    client: store.entities.clients[ownProps.match.params.id],
    clientHaircuts: Object.values(store.entities.clientHaircuts)
  }
}

const mdp = (dispatch) => {
  return{
    fetchClients: (id) => dispatch(fetchClients(id))
  }
}

export default connect(msp,mdp)(ClientProfileIndex)