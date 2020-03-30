export const createClientHaircut = function(client_haircut){
    return $.ajax({
        url:"/api/client_haircuts",
        method: "Post",
        data: {client_haircut}
    })
}