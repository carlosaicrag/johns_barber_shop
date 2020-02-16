import React from "react"

class ChooseHaircut extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHaircuts()
    }

    render(){
        if(!this.props.haircuts) return null;

        let haircutImages = this.props.haircuts.map((haircut) => {
            return(
                <img className="" src={haircut.path} alt="{haircut.haircut_name}"/>
            )
        })

        return(
            <div>
                {haircutImages}
            </div>
        )
    }
}

export default ChooseHaircut
