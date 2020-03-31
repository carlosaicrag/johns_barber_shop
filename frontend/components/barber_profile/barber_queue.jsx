import React from "react";

class BarberQueue extends React.Component{
    constructor(props){
        super(props)
        
        this.takeOrReleaseClient = this.takeOrReleaseClient.bind(this)
        if (this.props.booleanWorking){
            this.startTiltingProgress()
            this.state = ({minutes: localStorage.getItem('minutes'), seconds: localStorage.getItem('seconds'), clientFirstName: localStorage.getItem('clientFirstName'), clientLastName: localStorage.getItem('clientLastName'), clientHaircut: localStorage.getItem('clientHaircut')})
            this.intervalStopWatchId = setInterval(this.tick.bind(this), 1000)
           
        }else{
            this.state = {seconds: '00', minutes: '00', clientFirstName: 'N/A', clientLastName: '', clientHaircut: 'N/A'}
        }
    }
    
   tick(){
    
    if (this.props.booleanWorking){
        if (Number(this.state.seconds) < 59){
            if (Number(this.state.seconds) < 9){
                this.setState({seconds: `0${Number(this.state.seconds)+1}`})
            }else {
                this.setState({seconds: Number(this.state.seconds)+1})
            }
        } else {
            if (Number(this.state.minutes) < 9){
                this.setState({seconds: '00', minutes: `0${Number(this.state.minutes) + 1}`})
            }else {
                this.setState({seconds: '00', minutes: Number(this.state.minutes) + 1})
            }
            
        }
        localStorage.setItem('minutes', this.state.minutes)
        localStorage.setItem('seconds', this.state.seconds)
        localStorage.setItem('clientFirstName', this.props.clientFirstName)
        localStorage.setItem('clientLastName', this.props.clientLastName)
        localStorage.setItem('clientHaircut', this.props.clientHaircut)
        
    } else {
        clearInterval(this.intervalStopWatchId)
      
        this.setState({minutes: '00', seconds: '00'})
    }
   }

   takeOrReleaseClient(){
           this.props.updateBarberWorkingStatus(this.props.barberInfo)
           .then(
               () => {
                   if (!this.props.booleanWorking){
                       //update client info
                       this.props.updateClientHaircutClosedAt(this.props.clientHaircutId, new Date().toJSON()) 
                        clearInterval(this.intervalProgressId)
                        document.getElementsByClassName("in-progress-one")[0].style.opacity = "1"
                        this.setState({minutes: '00', seconds: '00', clientFirstName: 'N/A', clientLastName: '', clientHaircut: 'N/A'})
                   } else {
                        this.startTiltingProgress()
                        this.startTicking()
                   }
               }
           )
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
        clearInterval(this.intervalProgressId)
        clearInterval(this.intervalStopWatchId)
    }

    startTiltingProgress(){
        const inProgress = document.getElementsByClassName("in-progress-one")
        this.intervalProgressId = setInterval(() => this.inProgressCSS(inProgress[0]), 500 )
    }

    startTicking(){
        if (this.props.booleanWorking){
            // debugger
            this.intervalStopWatchId = setInterval(this.tick.bind(this), 1000)
            this.setState({clientFirstName: this.props.clientFirstName, clientLastName: this.props.clientLastName, clientHaircut: this.props.clientHaircut})
        }else{
            clearInterval(this.intervalStopWatchId)
            this.setState({hours: '00', minutes: '00', seconds: '00'})
        }
    }

  

    render(){
                const barberName = this.props.barberName
                const splittedBarberName = (("Chez ").split("").concat(barberName.split("")));
                return(
                    <div>
                        <div className="chez-barber-name">
                            {splittedBarberName.join('')}
                        </div>
                        <div className="in-progress">
                            <div className="in-progress-one">
                                {this.props.booleanWorking? 'In progress..': 'Take client'}
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
                                    <div className="client-name">{(this.state.clientFirstName + ' ' + this.state.clientLastName)}</div>
                                </div>
                                <div className="client-information-2">
                                    <img src={window.scissors} width="50" height="50" className="scissors-img"/>
                                    <div className="haircut-name">{this.state.clientHaircut}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }  
        }
            
       
    


export default BarberQueue

