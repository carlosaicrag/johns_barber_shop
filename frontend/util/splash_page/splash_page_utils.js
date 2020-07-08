export const retrieveBarbers = function(){
    return(
        $.ajax({
            method: "GET",
            url: "api/barbers",
        })
    ) 
}

export const cancelClientHaircut = function(client_haircut_id){
    return(
        $.ajax({
            method: "DELETE",
            url: `api/client_haircuts/${client_haircut_id}`,
        })
    )
}