import * as ClientAPIUtil from "../util/client/client_utils"
export const RECEIVE_PROFILE_CLIENT = "RECEIVE_PROFILE_CLIENT"


export const receiveClient = function(payload){
  return{
    type: RECEIVE_PROFILE_CLIENT,
    clients: payload.clients,
    clientHaircuts: payload.clientHaircuts
  }
}

export const fetchClients = (id) => (dispatch) => {
  return ClientAPIUtil.fetchClient(id)
  .then((payload) => {
    dispatch(receiveClient(payload))
  })
}
