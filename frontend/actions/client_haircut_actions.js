import {createClientHaircut} from "../util/client_haircuts/client_haircuts_util"
import * as ClientHaircutAPIUtil from '../util/client_haircuts/client_haircuts_util'
import {receiveClientsQueue} from './../actions/barber_actions'
export const RECEIVE_CLIENT_HAIRCUT = "RECEIVE_CLIENT_HAIRCUT"

const recieveClientHaircut = function(payload) {
    //receiveClientHaircut
    return{
        clienthaircut: payload.client_haircut,
        type: RECEIVE_CLIENT_HAIRCUT
    }
}

export const fetchClientHaircut = function(clientHaircut){
    return function(dispatch){
        createClientHaircut(clientHaircut)
        .then((payload) => {
            dispatch(recieveClientHaircut(payload))
            return payload.client_haircut
        })
    }
}


export const updateClientHaircutClosedAt = (clientHaircutId, closedAt) => dispatch => (
    ClientHaircutAPIUtil.updateClientHaircutClosedAt(clientHaircutId, closedAt)
    .then((newQueue => dispatch(receiveClientsQueue(newQueue))))
)



