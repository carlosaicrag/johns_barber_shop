import React from "react"
import Chair from './chair'

class Queues extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChairs()
    }

    render(){

        if(!this.props.chairs){
            return null;
        }
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
            
            <div className="chairs-container">
                {chairIcons}
            </div>
        )
    }
}

export default Queues