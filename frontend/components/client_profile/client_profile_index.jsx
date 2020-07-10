import React from "react"
import ClientProfileHeader from "./client_profile_header"
import ClientProfileHaircutIndex from "./client_profile_haircut_index"

class ClientProfileIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {loading: true}
  }

  componentDidMount(){
    this.props.fetchClients(this.props.match.params.id)
    .then(() => {
      this.setState({loading: false})
    })
  }

  render(){
    if (this.state.loading){
      return null
    }
    return(
      <div className="profile-container">
        <ClientProfileHeader 
        client={this.props.client}
        />
        <ClientProfileHaircutIndex 
          clientHaircuts={this.props.clientHaircuts}
        />
      </div>
    )
  }
}

export default ClientProfileIndex