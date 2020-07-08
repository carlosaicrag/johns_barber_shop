import {createClientHaircut} from "../util/client_haircuts/client_haircuts_util"
import * as ClientHaircutAPIUtil from '../util/client_haircuts/client_haircuts_util'
import * as SplashPageAPIUtil from '../util/splash_page/splash_page_utils'
import {receiveBarbers} from './../actions/splash_actions'
export const RECEIVE_CLIENT_HAIRCUT = "RECEIVE_CLIENT_HAIRCUT"

const recieveClientHaircut = function(payload) {
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

export const closeClientHaircut = (clientHaircutId) => {
    return (dispatch) => {
        return(
            ClientHaircutAPIUtil.closeClientHaircut(clientHaircutId)
            .then((newQueue) => {
                dispatch(receiveClientsQueue(newQueue))
            })
        )
        
    }
}

export const cancelClientHaircut = (clientHaircutId) => {
    return (dispatch) => {
        return(
            SplashPageAPIUtil.cancelClientHaircut(clientHaircutId)
            .then((newQueue) => {
                dispatch(receiveBarbers(newQueue))
                return newQueue
            })
        )
    }
}


