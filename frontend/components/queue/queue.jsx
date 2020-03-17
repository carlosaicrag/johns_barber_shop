import React from "react"
import Chair from './chair'
import ChairMobile from "./chair_mobile"
import QueueMobile from "./queue_mobile"
import { Link } from 'react-router-dom'

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
        this.openChooseHaircutModal = this.openChooseHaircutModal.bind(this)
        this.nextPrevBarber = this.nextPrevBarber.bind(this)
    }

    componentDidMount(){
        this.props.getChairs().then((chairs)=>{
            this.chairCount = Object.keys(chairs).length
        })
        let that = this;

        window.addEventListener("resize", () => {
            if (window.screen.width < 700) {
                that.setState({ mobile: true })
            }else if (window.screen.width > 700){
                that.setState({mobile:false})
            }
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

    openChooseHaircutModal(){
        this.props.history.push("chooseHaircut")
    }

    render(){
        if(!this.props.chairs){
            return null;
        }

        if(window.screen.width > 700){
            let chairIcons = this.props.chairs.map((chair,idx) => {
                let barberId = chair.barber_id
    
                return(
                    <Chair
                    key={idx}
                    barber = {this.props.barbers[barberId]}
                    />
                )
            })
    
            return(
                <div>
                    <div className="chairs-container">
                        {chairIcons}
                    </div>
                    
                    <div className="new-haircut-button-container">
                        <div className="new-haircut-button" onClick={this.openChooseHaircutModal}>
                            <div>
                                New Haircut
                            </div>
                        </div>
                    </div>
                </div>
    
            )
        }else{
            //mobile version 
            
            return(
                <QueueMobile
                    barbers={this.props.barbers}
                    chairs={this.props.chairs}
                    state={this.state}
                    nextPrevBarber={this.nextPrevBarber}
                />
            )
        }
    }
}

export default Queues