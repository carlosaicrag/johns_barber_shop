import {createClientHaircut} from "../util/client_haircuts/client_haircuts_util"

export const RECEIVE_CLIENT_HAIRCUT = "RECEIVE_CLIENT_HAIRCUT"

const recieveClientHaircut = function(payload) {
    return{
        clientHaircut: payload.clientHaircut,
        clientHaircutAvgTime: payload.clientHaircutAvgTime,
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