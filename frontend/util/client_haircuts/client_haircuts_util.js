export const createClientHaircut = function(client_haircut){
    return $.ajax({
        url:"/api/client_haircuts",
        method: "Post",
        data: {client_haircut}
    })
}

export const updateClientHaircutClosedAt = (clientHaircutId, closedAt) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/client_haircuts/${clientHaircutId}`,
        data: {client_haircut: {closed_at: closedAt}}
    })
}