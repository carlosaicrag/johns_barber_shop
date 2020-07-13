import React from "react"
import BarbersAndServices from "./barbers_and_services"

class BarberIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {mobile:false, barber:0, cancelFailSafe: false}
    this.openChooseHaircutModal = this.openChooseHaircutModal.bind(this);
    this.nextPrevBarber = this.nextPrevBarber.bind(this);
    this.remindToLogin = this.remindToLogin.bind(this); 
    this.handleCancelFailSafe = this.handleCancelFailSafe.bind(this)
    this.handleCancelClientHaircut = this.handleCancelClientHaircut.bind(this)
  }

  handleCancelClientHaircut(barberCancelingFrom){
    let that = this
    this.props.cancelClientHaircut(this.props.clientHaircutId)
    .then((payload) => {
      this.setState({[barberCancelingFrom.id]:payload.barbers[barberCancelingFrom.id].queueTime})
    })
  }

  handleCancelFailSafe(){
    this.setState({cancelFailSafe: !this.state.cancelFailSafe})
  }

  clearIntervals(){
    this.barberIntervals.forEach((interval) => {
      clearInterval(interval)
    })
  }

  componentWillUnmount(){
    this.clearIntervals()
  }

  componentDidMount(){
    this.barberIntervals = []

    this.props.getBarbers().then((barbers)=>{
      let barberIds = Object.keys(barbers)
      this.chairCount = Object.keys(barbers).length

      barberIds.forEach((barberId) => {
        let barber = barbers[barberId]
        let timeLimit = barber.totalWaitTime - barber.avgTime
        this.state[barberId] = barber.queueTime
        this.setState({ [barberId]: barber.queueTime })

        let interval = setInterval(() => {
          if (this.state[barberId] != 0 && this.state[barberId] > timeLimit){
            this.setState({ [barberId]: this.state[barberId] - 1 })
          }else{
            clearInterval(interval)
          }
        }, 60000)

        this.barberIntervals.push(interval)
      })
    })
  }

  nextPrevBarber(direction){
    return (e) => {
      if(direction === "left"){
        if(this.state.barber === 0){
          return null
        }else{
          this.setState({barber: this.state.barber - 1})
        }
      }else{
        if(this.state.barber === this.chairCount-1){
          return null
        }else{
          this.setState({barber: this.state.barber + 1})
        }
      }
    }
  }

  remindToLogin(modalWording){
    this.props.reminderModal(modalWording);
  }

  openChooseHaircutModal(){
    this.props.history.push("chooseHaircut")
  }

  render(){
    let modal;

    if(!this.props.client){
      modal = this.remindToLogin;
    } else {
      modal = this.openChooseHaircutModal;
    }

    if(!Object.values(this.props.barbers)){
      return null;
    }
      return(
        <BarbersAndServices
          barbers={this.props.barbers}
          state={this.state}
          client={this.props.client}
          remindToLogin = {this.remindToLogin}
          nextPrevBarber={this.nextPrevBarber}
          alreadyInQueue={this.props.alreadyInQueue}
          barberSession={this.props.barberSession}
          handleCancelFailSafe={this.handleCancelFailSafe}
          cancelFailSafe={this.state.cancelFailSafe}
          clientHaircutId={this.props.clientHaircutId}
          handleCancelClientHaircut={this.handleCancelClientHaircut}
          barberCancelingFrom={this.props.barberCancelingFrom}
        />
      )
  }
}

export default BarberIndex