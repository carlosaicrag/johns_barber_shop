import React from "react"

class ChooseHaircut extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchHaircuts()
    }

    render(){
        
        return(
            <div>
                
            </div>
        )
    }
}

export default ChooseHaircut
