import React from "react"
import {Link, withRouter} from "react-router-dom"

const navModal = function(props){
    function handleBarberLogOut(e){
        e.preventDefault()
        props.logout()
    }

    function handleClientLogOut(e){
        e.preventDefault
        props.clientLogout()
    }

    if(!props.session && !props.clientSession){    
        return(
            <div className="modal-nav-container">
                <div className="modal-nav-option">
                    <Link to="/login">About</Link>
                </div>
                <div>
                    <Link to="/login">Client Login</Link>
                </div>
                <div>
                    <Link to="/login">Client Signup</Link>
                </div>
                <div>
                    <Link to="/login">Barber Login</Link>
                </div>
                <div>
                    <Link to="/signup">Barber Signup</Link>
                </div>
                <div>
                    <Link to="/login">Testimonials</Link>
                </div>
            </div>
        )   
    }else{
        let logout;

        if(props.session){
            logout = <div>
                <a onClick={handleBarberLogOut}>Log Out</a>
            </div>
        }else{
            logout = <div>
                <a onClick={handleClientLogOut}>Log Out</a>
            </div>
        }

        return (
            <div className="modal-nav-container">
                <div className="modal-nav-option">
                    <Link to="/login">About</Link>
                </div>
                {logout}
                <div>
                    <Link to="/login">Testimonials</Link>
                </div>
            </div>
        )
    }

}

export default withRouter(navModal);