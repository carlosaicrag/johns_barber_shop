import React from 'react'

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChairs()
    }

    render(){
        return (
            <h1>Dashboard</h1>
        )
    }
}