import {createClientHaircuts} from "../util/client_haircuts/client_haircuts_util"

export const RECEIVE_CLIENT_HAIRCUT = "RECEIVE_CLIENT_HAIRCUT"

const recieveClientHaircut = function(payload) {
    return{
        clienthaircut: payload.client_haircut,
        type: RECEIVE_CLIENT_HAIRCUT
    }
}

export const fetchClientHaircut = function(clientHaircut){
    return function(dispatch){
        createClientHaircuts(clientHaircut)
        .then((payload) => {
            dispatch(recieveClientHaircut(payload))
            return payload.client_haircut
        })
    }
}