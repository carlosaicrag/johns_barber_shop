import React from "react"
import Chair from './chair'

class Queues extends React.Component{
    constructor(props){
        super(props)
        this.openChooseHaircutModal = this.openChooseHaircutModal.bind(this)
    }

    componentDidMount(){
        this.props.getChairs()
    }

    openChooseHaircutModal(){
        this.props.openModal()
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
                <button onClick ={this.openChooseHaircutModal}>New haircut</button>
            </div>
        )
    }
}

export default Queues