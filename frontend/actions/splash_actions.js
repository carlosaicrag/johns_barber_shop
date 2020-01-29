import {retrieveChairs} from "../util/splash_page/splash_page_utils"
export const RECEIVE_CHAIRS = "RECEIVE_CHAIRS"


export const receiveChairs = function(payload){
    const chairs = payload.chairs
    const barbers = payload.barbers
    
    return({
        type: RECEIVE_CHAIRS,
        chairs: chairs,
        barbers: barbers    
    })
}

export const getChairs = () => (dispatch) => {
    return(
        retrieveChairs().then((payload) => dispatch(receiveChairs(payload)))
    )
}