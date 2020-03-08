import React from "react"

const ChairMobile = function (props) {

    return (
        <div className="chair-nextarrow-waittime-newhaircut">
            <div className="chair-nextarrow-waittime-container">
                <div className="chair-nextarrow-container">
                    <div className="next-button" onClick={props.nextPrevBarber("left")}>
                        <i className="fas fa-arrow-circle-left"></i>
                    </div>
                    <div className="chair-container-mobile">
                        <div className="chair-container-barber-name">{props.barber.fname}</div>
                        <img src={props.barber.image_url} alt="barber_url" />
                        <img src="/barber-chair.png" alt="barber-chair" />
                    </div>
                    <div className="next-button" onClick={props.nextPrevBarber("right")}>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                </div>
                <div className="chair-container-barber-name">Time to Wait: 0 mins</div>
            </div>
            <div>New Haircut</div>
        </div>
    )
}

export default ChairMobile