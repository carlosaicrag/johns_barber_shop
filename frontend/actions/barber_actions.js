import * as APIUtil from './../util/barber/barber_util';
export const RECEIVE_BARBER = "RECEIVE_BARBER"

const receiveBarber = barber => ({
    type: RECEIVE_BARBER,
    barber
})

export const fetchBarber = barberId => dispatch => (
    APIUtil.fetchBarber(barberId)
    .then(barber => dispatch(receiveBarber(barber)))
)