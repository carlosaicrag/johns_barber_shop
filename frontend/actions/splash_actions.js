import {retrieveBarbers} from "../util/splash_page/splash_page_utils"
export const RECEIVE_BARBERS = "RECEIVE_BARBERS"


export const receiveBarbers = function(payload){
    const barbers = payload.barbers
    
    return({
        type: RECEIVE_BARBERS,
        barbers: barbers    
    })
}

export const getBarbers = () => (dispatch) => {
    return(
        retrieveBarbers().then((payload) => {
            dispatch(receiveBarbers(payload))
            return payload.barbers
        })
    )
}