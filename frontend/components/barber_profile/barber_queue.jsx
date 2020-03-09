import React from "react";
import CircleType from "circletype";
import ReactDOM from "react-dom"


class BarberQueue extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getChairs()
        }
    



    render(){
        if (this.props.barbers.length === 1){
            return null
        } else {   
            const barberName = this.props.barbers[Number(this.props.match.params.barberId)].fname
            const splittedBarberName = (("Chez ").split("").concat(barberName.split("")).reverse());
            const emptyRotationArray = new Array(splittedBarberName.length)
            if (splittedBarberName.length % 2 !== 0){
                const rotationDegreeHalf = Math.floor(splittedBarberName.length/2)
                emptyRotationArray[rotationDegreeHalf] = 0;
                const deltaRotation = 75 / rotationDegreeHalf;
                splittedBarberName.slice(0, rotationDegreeHalf).map((rotation,idx) =>{
                    emptyRotationArray[idx] = 75 - (deltaRotation * idx);
                    emptyRotationArray[ splittedBarberName.length - idx - 1] = -(75 - (deltaRotation * idx))
                })
            } else {
                
            }
            const curvedBarberName = splittedBarberName.map((letter, idx) => (
                <span key={idx} style={{transform: `rotate(${emptyRotationArray[idx]}deg)`}}>{letter}</span>
            ))

            return(
                <div>
                    <div className="estrellas inverso">
                        {curvedBarberName}
                    </div>
                    <div id="left-side" ref = "cpDev1">
                        <img id="barber-image" src={window.barberURL} alt=""/>
                    </div>
                </div>
            )

        }
            
       
    }
}

export default BarberQueue