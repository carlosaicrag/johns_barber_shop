export const retrieveBarbers = function(){
    return(
        $.ajax({
            method: "GET",
            url: "api/users",
        })
    ) 
}