import React from "react";

class BarberQueue extends React.Component{
    constructor(props){
        super(props)
        this.state = {mobile: false, startTime: 0, seconds: '00', minutes: '00'}
        
    }
    
   tick(){
    if (Number(this.state.seconds) < 59){
        if (Number(this.state.seconds) < 9){
            this.setState({seconds: `0${Number(this.state.seconds)+1}`})
        }else {
            this.setState({seconds: Number(this.state.seconds)+1})
        }
    } else {
        if (Number(this.state.minutes) < 9){
            this.setState({seconds: '00', minutes: `0${Number(this.state.minutes) + 1}`})
        }else {
            this.setState({seconds: '00', minutes: Number(this.state.minutes) + 1})
        }
    }
   }



    inProgressCSS(inProgressHTMLCollection){
        if (inProgressHTMLCollection.style.opacity === "0.7" || inProgressHTMLCollection.style.opacity === ""){
            inProgressHTMLCollection.style.opacity = "1"
        }else{
            inProgressHTMLCollection.style.opacity = "0.7"
        }
    }

    componentDidMount(){
        this.props.getChairs();
        const inProgress = document.getElementsByClassName("in-progress-one")
        this.intervalProgressId = setInterval(() => this.inProgressCSS(inProgress[0]), 500 )
        this.intervalStopWatchId = setInterval(this.tick.bind(this), 1000)
        // let that = this;

        // window.addEventListener("resize", () => {
        //     if (window.screen.width < 700) {
        //         that.setState({ mobile: true })
        //     }else if (window.screen.width > 700){
        //         that.setState({mobile:false})
        //     }
        // })
    }

    componentWillUnmount(){
        clearInterval(this.intervalProgressId)
        clearInterval(this.intervalStopWatchId)
    }

    
    rotate(splittedBarberName){
        const emptyRotationArray = new Array(splittedBarberName.length)
        if (splittedBarberName.length % 2 !== 0){
            const rotationDegreeHalf = Math.floor(splittedBarberName.length/2)
            emptyRotationArray[rotationDegreeHalf] = 0;
            const deltaRotation = 75 / rotationDegreeHalf;
            splittedBarberName.slice(0, rotationDegreeHalf).map((rotation,idx) =>{
            emptyRotationArray[idx] = 75 - (deltaRotation * idx);
            emptyRotationArray[splittedBarberName.length - idx - 1] = -(75 - (deltaRotation * idx))
            this.curvedBarberName = splittedBarberName.map((letter, idx) => (
                <span key={idx} style={{transform: `rotate(${emptyRotationArray[idx]}deg)`}}>{letter}</span>
            )) 
            })
        } else {
            const deltaRotation = 150 / splittedBarberName.length;
            // splittedBarberName.slice(0, rotationDegreeHalf).map((rotation,idx) =>{
            // emptyRotationArray[idx] = 75 - (deltaRotation * idx);
            // emptyRotationArray[splittedBarberName.length - idx - 1] = -(75 - (deltaRotation * idx))
            // this.curvedBarberName = splittedBarberName.map((letter, idx) => (
            //     <span key={idx} style={{transform: `rotate(${emptyRotationArray[idx]}deg)`}}>{letter}</span>
            // )) 
            // })
          
            
        }
    }

    render(){
        
        if (this.props.barbers.length === 1 ){
            return null
        } else { 
            // if (window.screen.width < 700){
               
                let that = this
                const barberName = this.props.barbers[Number(this.props.match.params.barberId - 1)].fname
                const splittedBarberName = (("Chez ").split("").concat(barberName.split("")).reverse());
                // this.rotate(splittedBarberName)
                return(
                    <div>
                        {/* <div className="estrellas inverso"> */}
                        <div className="chez-barber-name">
                            {splittedBarberName.reverse().join('')}
                        </div>
                        <div className="in-progress">
                            <div className="in-progress-one">
                                In progress..
                            </div>
            
                            <div className="release-button">
                                <img src={window.circleDone} alt="person-done" height="30"/>
                                {/* Release */}
                            </div>
                        </div>
                        <div className="barber-chair">
                            <img src="/barber-chair.png" alt="barber-chair" className="barber-image" height={window.screen.height * 0.35} />
                        </div>

                        <div className="in-progress-two">
                                <img className="in-progress-two-left" src={window.stopWatch} alt="" height="40"/>
                                <div className="in-progress-two-right">{this.state.minutes}:{this.state.seconds}</div>
                        </div>
                        <div className="info-list">
                            <div>LEFT</div>
                            <img src={window.barberPole1} height="130" width="120"/>
                            <div>RIGHT</div>
                        </div>
                        {/* <div id="left-side">
                            <img id="barber-image" src={window.barberURL} alt=""/>
                        </div> */}
                    </div>
                )
               
                    

            }  
            


        }
            
       
    }


export default BarberQueue