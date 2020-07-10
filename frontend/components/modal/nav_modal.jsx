import React from "react"
import {Link, withRouter} from "react-router-dom"

const navModal = function(props){
    function handleBarberLogOut(e){
        e.preventDefault()
        props.barberLogout().then(() => {
            props.history.push("/errors")
            props.history.push("/")
        })
    }

    function handleClientLogOut(e){
        e.preventDefault()
        props.clientLogout()
    }

    if(!props.session && !props.clientSession){    
        return(
            <div className="modal-nav-container">
                <div className="modal-nav-option">
                    <Link to="/login">About</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/signup">Signup</Link>
                </div>
                <div>
                    <Link to="/login">Testimonials</Link>
                </div>
            </div>
        )   
    } else { 
        let logout;
        let queue = "";
        let profile = "";

        if(props.session){
            logout = <div>
                <a onClick={handleBarberLogOut}>Log Out</a>
            </div>
          queue = <div className="modal-nav-option">
            <Link to="/queue">Queue</Link>
          </div>
        }else if (props.clientSession){
            profile = <div className="modal-nav-option">
                <Link to={`/clients/${props.clientSession}`}>Profile</Link>
            </div>
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
                {queue}
                {profile}
            </div>
        )
    }

}

export default withRouter(navModal);