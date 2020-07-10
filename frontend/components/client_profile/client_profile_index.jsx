import React from "react"

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
        <div className="client-profile-info">
          <div className="client-profile-picture-name-joined">
            <img className="client-profile-picture" src={this.props.client.clientGravitar} alt=""/>
            <div className="client-profile-name-container">
              <div className="client-profile-name">
                {this.props.client.fname}
              </div>
            </div>
            <div className="client-profile-joined-container">
              <div className="client-profile-joined">
                joined: {this.props.client.dateStarted.month} {this.props.client.dateStarted.day}, {this.props.client.dateStarted.year}
              </div>
            </div>

            <div className="client-profile-haircut-count-container">
              <div className="client-profile-haircut-count"> 
                number of haircuts: {this.props.client.clientHaircutCount}
              </div>
            </div>
          </div>
        </div>

        <div className="client-profile-barber-info-container">

        </div>
      </div>
    )
  }
}

export default ClientProfileIndex