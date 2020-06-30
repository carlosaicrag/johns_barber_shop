/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import ReminderModal from '../modal/reminder_modal';

class ChooseHaircut extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chooseHaircut: false,
            chooseBarber: false,
            haircut_id: "",
            barber_id: ""
        }
        this.handleOptionsAppearance = this.handleOptionsAppearance.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchHaircuts()
    }

    handleOptionsAppearance(field){
        return(() => {
            if (this.state[field]){
                this.setState({[field]: false})
            }else{
                this.setState({[field]: true})
            }
        })
    }

    handleBarberHaircut(field,value){
        return () => {
            this.setState({[field]: value})
        }
    }

    displayHaircuts(){
        if(this.state.chooseHaircut){
            let haircutImages = this.props.haircuts.map((haircut) => {
                let haircutChosen = ""
                if (this.state.haircut_id === haircut.id) haircutChosen = "haircut-chosen"; 
                return (
                    <div className={`w3-card ${haircutChosen}`} onClick={this.handleBarberHaircut("haircut_id",haircut.id)} key={haircut.id}>
                        <img className="w3-image" src={haircut.path} alt="{haircut.haircut_name}" />
                    </div>
                )
            })

            return(
                <div className="w3-container">
                    {haircutImages}
                </div>
            )
        }else{
            return []
        }
    }

    displayBarber(){
        if(this.state.chooseBarber){
            let barbers = this.props.barbers.map((barber) => {
                let barberChosen = ""
                if (this.state.barber_id === barber.id) barberChosen = "barber-chosen";
                return (
                    <div className={`w3-card ${barberChosen}`} key={barber.id} onClick={this.handleBarberHaircut("barber_id", barber.id)}>
                        <img className="w3-image" src={barber.gravitar} alt="{barber}"/>
                        <div>{barber.fname}</div>
                    </div>
                )
            })
            let chooseBarber = <div className="w3-container">
                    {barbers}
                </div>

            return chooseBarber
        }else{
            return []
        }
    }

    handleSubmit(){
        this.props.fetchClientHaircut({haircut_id:this.state.haircut_id, barber_id: this.state.barber_id})
        this.props.history.push("/")
    }

    render(){
        if(!this.props.client){
            return (
                <div className='no-new-hair-cut'>
                    <ReminderModal />
                </div>  
            )
        }; 

        if(!this.props.haircuts) return null;

        let chooseBarber = []

        return(
            <div className="w3-container cover">

                <div className="choose-haircut-form-option">
                    <div>
                        <i className="fas fa-plus" onClick={this.handleOptionsAppearance("chooseHaircut")}></i>
                        <div>
                            Choose Haircut
                        </div>
                    </div>
                    {this.displayHaircuts()}
                </div>

                <div className="choose-haircut-form-option">
                    <div>
                        <i className="fas fa-plus" onClick={this.handleOptionsAppearance("chooseBarber")}></i>
                        <div>
                            Choose Barber
                        </div>
                    </div>
                    {this.displayBarber()}
                </div>

                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default ChooseHaircut
