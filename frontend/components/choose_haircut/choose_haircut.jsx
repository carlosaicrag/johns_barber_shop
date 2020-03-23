/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react"

class ChooseHaircut extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chooseHaircut: false,
            chooseBarber: false,
            haircut: "",
            barber: ""
        }
        this.handleOptionsAppearance = this.handleOptionsAppearance.bind(this)
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
            debugger
            this.setState({[field]: value})
        }
    }

    displayHaircuts(){
        if(this.state.chooseHaircut){
            let haircutImages = this.props.haircuts.map((haircut) => {
                return (
                    <div className="w3-card" onClick={this.handleBarberHaircut("barber",haircut.haircut_name)}>
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
                return (
                    <div className="w3-card">
                        <img className="w3-image" src={barber.image_url} alt="{barber}" />
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

    render(){
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

            </div>
        )
    }
}

export default ChooseHaircut
