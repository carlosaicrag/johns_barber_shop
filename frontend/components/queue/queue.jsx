import React from "react"


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

        let chairIcons = []

        for(let i = 0; i < 5; i++){
            chairIcons.push(<img src="/barber-chair.png" alt="barber-chair" />)
        }

        debugger
        return(
            <div className="chairs-container">
                {chairIcons}
            </div>
        )
    }
}

export default Queues