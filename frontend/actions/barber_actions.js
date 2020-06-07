import * as APIUtil from './../util/barber/barber_util';
export const RECEIVE_BARBER = "RECEIVE_BARBER"
export const RECEIVE_QUEUE = "RECEIVE_QUEUE"

const receiveBarber = barber => {
    return {
        type: RECEIVE_BARBER,
        barber
            }
}

export const receiveClientsQueue = payload => {
    return {
    type: RECEIVE_QUEUE,
    clientHaircut: payload.clientHaircut
    }
}

export const fetchBarber = barberId => dispatch => (
    APIUtil.fetchBarber(barberId)
    .then(barber => dispatch(receiveBarber(barber)))
)

export const fetchQueue = () => dispatch => (
    APIUtil.fetchQueue()
    .then((payload) => dispatch(receiveClientsQueue(payload)))
)

export const updateBarberWorkingStatus = (barber) => dispatch => (
    APIUtil.updateBarberWorkingStatus(barber)
    .then((barber) => dispatch(receiveBarber(barber)))
)