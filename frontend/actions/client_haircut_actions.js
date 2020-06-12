import {createClientHaircut} from "../util/client_haircuts/client_haircuts_util"
import * as ClientHaircutAPIUtil from '../util/client_haircuts/client_haircuts_util'
import {receiveClientsQueue} from './../actions/barber_actions'
export const RECEIVE_CLIENT_HAIRCUT = "RECEIVE_CLIENT_HAIRCUT"

const recieveClientHaircut = function(payload) {
    //receiveClientHaircut
    return{
        clientHaircut: payload.clientHaircut,
        type: RECEIVE_CLIENT_HAIRCUT
    }
}

export const fetchClientHaircut = function(clientHaircut){
    return function(dispatch){
        return createClientHaircut(clientHaircut)
        .then((payload) => {
            dispatch(recieveClientHaircut(payload))
        })
    }
}

export const updateClientHaircutClosedAt = (clientHaircutId) => {
    return (dispatch) => {
        return(
            ClientHaircutAPIUtil.updateClientHaircutClosedAt(clientHaircutId)
            .then((newQueue) => {
                dispatch(receiveClientsQueue(newQueue))
            })
        )
        
    }
}


