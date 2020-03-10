/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react"

class ChooseHaircut extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chooseHaircut: true,
            chooseBarber: true,
            inputPhoneNumber:true
        }

    }

    componentDidMount(){
        this.props.fetchHaircuts()
    }

    render(){
        if(!this.props.haircuts) return null;

        let haircutImages = this.props.haircuts.map((haircut) => {
            return(
                <div className="w3-card">
                    <img className="w3-image" src={haircut.path} alt="{haircut.haircut_name}"/>
                </div>
            )
        })


        let chooseBarber = []
        let inputPhoneNumber=[]

        if (this.state.chooseBarber) {
            let barbers = this.props.barbers.map((barber) => {
                return (
                    <div className="w3-card">
                        <img className="w3-image" src={barber.image_url} alt="{barber}" />
                    </div>
                )
            })
            chooseBarber =<div className="cover">
                <h3>Choose Barber</h3>
                <div className="w3-container">
                    {barbers}
                </div>
                </div>
        }

        if(this.state.inputPhoneNumber){
            inputPhoneNumber = <label> Enter Phone Number
                    <input type="text" name="" />
            </label>
        }

        return(
            <div className="w3-container cover">

                <div className="choose-haircut-form-option">
                    <i class="fas fa-plus"></i>
                    Choose Haircut
                </div>

                <div className="choose-haircut-form-option">
                    <i class="fas fa-plus"></i>
                    Choose Barber
                </div>

                <div className="choose-haircut-form-option">
                    <i class="fas fa-plus"></i>
                    Information
                </div>

                <h3>Choose Haircut</h3>
                <div className="w3-container">
                    {haircutImages}
                </div>

                <br/>

                {chooseBarber}
                {inputPhoneNumber}
            </div>
        )
    }
}

export default ChooseHaircut
