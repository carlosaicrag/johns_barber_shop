

export const fetchBarber = (barberId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${barberId}`
    })
}

export const fetchQueue = () => {
    return $.ajax({
        method: "GET",
        url: `api/queue`
    })
}