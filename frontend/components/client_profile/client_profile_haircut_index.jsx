import React from "react"
import ClientProfileHaircutIndexItem from "./client_profile_haircut_index_item"

const ClientProfileHaircutIndex = function(props){
  const clientHaircutItems = props.clientHaircuts.map((clientHaircut,idx) => {
    return(
      <ClientProfileHaircutIndexItem
        key={idx} 
        clientHaircut={clientHaircut}
      />
    )
  })
  return(
    <div className="client-profile-barber-info-container">
      {clientHaircutItems}
    </div>
  )
}

export default ClientProfileHaircutIndex