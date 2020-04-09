import React from "react"
import BarbersAndServices from "./barbers_and_services"

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

class Queues extends React.Component{
    constructor(props){
        super(props)
        this.state = {mobile:false, barber:0}
        this.openChooseHaircutModal = this.openChooseHaircutModal.bind(this);
        this.nextPrevBarber = this.nextPrevBarber.bind(this);
        this.remindToLogin = this.remindToLogin.bind(this); 
    }

    secToMin(sec){
        return sec/60
    }

    hourToMin(hour){
        return hour * 60
    }

    initialWaitForBarber(queueTime,startTimeHour,startTimeMin,startTimeSec,avgTime){
        let date = new Date()
        let pageVisitTime = this.hourToMin(date.getHours()) + this.secToMin(date.getSeconds()) + date.getMinutes()
        let haircutStartTime = this.hourToMin(startTimeHour) + this.secToMin(startTimeSec) + startTimeMin

        if(haircutStartTime == 0){
            return queueTime
        }else{
            let time = Math.floor(queueTime - (pageVisitTime - haircutStartTime))

            if(time <= 0){
                return 0
            } else if ((pageVisitTime - haircutStartTime) >= avgTime){
                return queueTime - avgTime
            }else{
                return time
            }
        }
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
        let that = this
        this.barberIntervals = []

        this.props.getBarbers().then((barbers)=>{
            let barberIds = Object.keys(barbers)
            this.chairCount = Object.keys(barbers).length

            barberIds.forEach((barberId) => {
                let barber = barbers[barberId]
                let currentClientStarttime = barber.currentClientStarttime

                this.state[barberId] = this.initialWaitForBarber(barber.queueTime, 
                currentClientStarttime.hour,
                currentClientStarttime.minute,
                currentClientStarttime.second,
                currentClientStarttime.avgTime)

                let queueTimeMinusAvgTimeOfCurrentClient = barber.queueTime - currentClientStarttime.avgTime

                this.setState({ [barberId]: this.state[barberId] })

                let interval = setInterval(() => {
                    if (this.state[barberId] != 0 && this.state[barberId] > queueTimeMinusAvgTimeOfCurrentClient){
                        this.setState({ [barberId]: this.state[barberId] - 1 })
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

    remindToLogin(){
        this.props.reminderModal();
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
                />
            )
    }
}

export default Queues