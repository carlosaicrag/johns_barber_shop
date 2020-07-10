export const fetchClient = function(id){
  return(
    $.ajax({
      url:`api/clients/${id}`,
      method: "GET"
    })
  )
}