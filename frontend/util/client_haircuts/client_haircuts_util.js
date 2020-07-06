export const createClientHaircut = function(client_haircut){
    return $.ajax({
        url:"/api/client_haircuts",
        method: "Post",
        data: {client_haircut}
    })
}

export const closeClientHaircut = (clientHaircutId) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/client_haircuts/${clientHaircutId}/close_client_haircut`
    })
}