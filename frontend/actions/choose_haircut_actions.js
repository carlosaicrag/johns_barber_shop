import {fetchHairCuts} from "../util/haircuts/haircuts_util"
export const RECEIVE_HAIRCUTS = "RECEIVE_HAIRCUTS"

const receiveHairCuts = function(payload){
    debugger
    return({
        type: RECEIVE_HAIRCUTS,
        haircuts: payload.haircuts
    })
}

export const getHairCuts = function(){
    return(
        function(dispatch){
            fetchHairCuts().then((payload) => dispatch(receiveHairCuts(payload)))
        }
    )
}