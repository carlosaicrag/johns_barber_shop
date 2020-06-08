import React from "react";

class BarberQueue extends React.Component{
  constructor(props){
    super(props)
    
    this.takeOrReleaseClient = this.takeOrReleaseClient.bind(this)
    this.state = { minutes: 0, seconds: 0, cuttingHair: false }
  }
  
  tick(){
    let that = this
    this.stopWatch = setInterval(() => {
      this.setState({minutes: that.state.minutes, seconds: that.state.seconds + 1,cuttingHair:true})
    },1000)
  }
  
  takeOrReleaseClient(){
    if(this.cuttingHair()){
      clearInterval(this.stopWatch)
      this.setState({minutes:0, seconds:0, cuttingHair:true},
        () =>{
          this.props.updateClientHaircutClosedAt(this.props.clientHaircutId)
        })
      return null
    }

    if(this.props.numberOfPeopleWaiting > 0 ){
      this.setState({cuttingHair:false},
        () =>{
          this.props.updateBarberWorkingStatus(this.props.barberInfo)
        })
    }else{
      return null
    }
  }

  inProgressCSS(inProgressHTMLCollection){
    if (inProgressHTMLCollection.style.opacity === "0.7" || inProgressHTMLCollection.style.opacity === ""){
      inProgressHTMLCollection.style.opacity = "1"
    }else{
      inProgressHTMLCollection.style.opacity = "0.7"
    }
  }

  componentDidMount(){
    this.props.fetchQueue()
  }

  componentWillUnmount(){
    clearInterval(this.stopWatch)
  }

  startTiltingProgress(){
    const inProgress = document.getElementsByClassName("in-progress-one")
    this.intervalProgressId = setInterval(() => this.inProgressCSS(inProgress[0]), 500 )
  }

  cuttingHair(){
    if (this.props.booleanCuttingHair) {
      if(!this.state.cuttingHair){
        // if(!this.stopWatch){
          this.tick()
        // }
      }
      return true
    } else {
      return false
    }
  }

  render(){
    const barberName = this.props.barberName
    const splittedBarberName = (("Chez ").split("").concat(barberName.split("")));
    if(!this.props.timeElapsed){
      return null
    }
    this.cuttingHair()
    return(
      <div>
        <div className="chez-barber-name">
          {splittedBarberName.join('')}
        </div>
        <div className="in-progress">
          <div className="in-progress-one">
            {this.props.booleanCuttingHair? 'In progress..': 'Take client'}
          </div>
  
          <div className="release-button">
            <img src={window.circleDone} alt="person-done" height="30" onClick={this.takeOrReleaseClient}/>
          </div>
        </div>
        <div className="barber-chair">
          {/* <img src="/barber-chair.png" alt="barber-chair" className="barber-image" height={window.screen.height * 0.35} /> */}
          <img src={window.chair} alt="barber-chair" className="barber-image" height={window.screen.height * 0.35} />
        </div>

        <div className="in-progress-two">
            <img className="in-progress-two-left" src={window.stopWatch} alt="" height="40"/>
            <div className="in-progress-two-right">{this.state.minutes}:{this.state.seconds}</div>
        </div>
        <div className="info-list">
          <div className="number-of-people-waiting">
            {this.props.numberOfPeopleWaiting}
          </div>
          <img src={window.barberPole1} height="130" width="120"/>
          <div className="client-information">
            <div className="client-information-1">
              <img src={window.barber} width="50" height="50" className="client-img"/>
              <div className="client-name">{(this.props.clientFirstName + ' ' + this.props.clientLastName)}</div>
            </div>
            <div className="client-information-2">
              <img src={window.scissors} width="50" height="50" className="scissors-img"/>
              <div className="haircut-name">{this.props.clientHaircut}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}
export default BarberQueue

