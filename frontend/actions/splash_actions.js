import {retrieveBarbers} from "../util/splash_page/splash_page_utils"
export const RECEIVE_BARBERS = "RECEIVE_BARBERS"


export const receiveBarbers = function(payload){
    const barbers = payload.barbers
    const clientHaircuts = payload.clientHaircuts
    return({
        type: RECEIVE_BARBERS,
        barbers: barbers,
        clientHaircuts: clientHaircuts   
    })
}

export const getBarbers = () => (dispatch) => {
    return(
        retrieveBarbers().then((payload) => {
            dispatch(receiveBarbers(payload))
            if (!payload.barbers) return {}
            return payload.barbers
        })
    )
}