import React from "react"


class Queues extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChairs()
    }

    render(){
        if(!this.props.queue){
            return null;
        }
        return(
            <div className="chairs-container">
                this is the splash page
            </div>
        )
    }
}

export default Queues