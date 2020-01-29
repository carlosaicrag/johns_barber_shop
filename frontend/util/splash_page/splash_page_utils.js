export const retrieveChairs = function(){
    return(
        $.ajax({
            method: "GET",
            url: "api/chairs",
        })
    ) 
}