import * as APIUtil from './../util/barber/barber_util';
export const RECEIVE_BARBER = "RECEIVE_BARBER"
export const RECEIVE_QUEUE = "RECEIVE_QUEUE"

const receiveBarber = barber => {
    return {
        type: RECEIVE_BARBER,
        barber
            }
}

const receiveClientsQueue = queue => ({
    type: RECEIVE_QUEUE,
    queue
})

export const fetchBarber = barberId => dispatch => (
    APIUtil.fetchBarber(barberId)
    .then(barber => dispatch(receiveBarber(barber)))
)

export const fetchQueue = () => dispatch => (
    APIUtil.fetchQueue()
    .then((queue) => dispatch(receiveClientsQueue(queue)))
)

export const updateBarberWorkingStatus = (barber) => dispatch => (
    APIUtil.updateBarberWorkingStatus(barber)
    .then((barber) => dispatch(receiveBarber(barber)))
)