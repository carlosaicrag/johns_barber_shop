

export const fetchBarber = (barberId) => {
    return $.ajax({
        method: "GET",
        url: `api/chairs/${barberId}`
    })
}