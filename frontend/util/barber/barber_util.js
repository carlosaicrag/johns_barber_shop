export const fetchBarber = (barberId) => {
    return $.ajax({
        method: "GET",
        url: `api/barbers/${barberId}`
    })
}

export const fetchQueue = () => {
    return $.ajax({
        method: "GET",
        url: `api/queue`
    })
}

export const updateBarberWorkingStatus = (barber) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/barbers/${barber.id}`
    })
}