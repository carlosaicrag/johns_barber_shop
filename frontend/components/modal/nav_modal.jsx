import React from "react"
import {Link, withRouter} from "react-router-dom"

const navModal = function(props){
    function handleLogOut(e){
        e.preventDefault()
        props.logout()
    }

    if(!props.session){    
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
        return (
            <div className="modal-nav-container">
                <div className="modal-nav-option">
                    <Link to="/login">About</Link>
                </div>
                <div>
                    <a onClick={handleLogOut}>Log Out</a>
                </div>
                <div>
                    <Link to="/login">Testimonials</Link>
                </div>
            </div>
        )
    }

}

export default withRouter(navModal);