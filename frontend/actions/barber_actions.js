import * as APIUtil from './../util/barber/barber_util';
export const RECEIVE_BARBER = "RECEIVE_BARBER"
export const RECEIVE_QUEUE = "RECEIVE_QUEUE"

const receiveBarber = barber => ({
    type: RECEIVE_BARBER,
    barber
})

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