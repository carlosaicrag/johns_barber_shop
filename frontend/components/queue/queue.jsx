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
            <div>
                <div className="new-haircut-button" onClick ={this.openChooseHaircutModal}>
                    <div>
                        New haircut
                    </div>
                </div>
                <div className="chairs-container">
                    {chairIcons}
                </div>
            </div>

        )
    }
}

export default Queues