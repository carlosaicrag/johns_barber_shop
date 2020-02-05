export const fetchHairCuts = function(){
    return(
        $.ajax({
            method: "GET",
            url: "api/haircuts",
        })
    )
}