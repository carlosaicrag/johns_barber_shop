import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    // currentUser 
    // logout
    super(props)

    this.state = {dropDown: false};
    this.personalGreeting = this.personalGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.dropDown = this.dropDown.bind(this)
  }

  sessionLinks(){
    return(
      <nav className="login-container login-container-dropdown">
        {/* <Link to="/signup" className="header__btn--register">Register</Link> */}
        <Link to="/login" className="header__btn--login header__btn-login-dropdown">Login</Link>
      </nav>
    )
  }

  personalGreeting(){
    return(
      <nav className="header__right-container">
        <div className="header__right-container--username">
          Hi, {this.props.currentUser.username}
        </div>
        <button className="header__right-container--logout-btn" onClick={this.props.logout}>
          Log Out
        </button>
      </nav>
    )
  }

  dropDown(e){
    this.state.dropDown ? this.setState({dropDown: false}): this.setState({dropDown:true})
  }

  render(){


    return (
      <header id="header-container">
        <Link to="/queue" className="logo"> John's Barber Shop </Link>
        <div className="session-button-dropdown-container w3-container">
          <div className="w3-dropdown-hover">
            <img onClick={this.dropDown} className="w3-button drop-down-burger" src="/haircut.png" alt="dropDown"/> 
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              {<Link className="w3-bar-item w3-button" to="/login">Login</Link>}
              <a href="#" className="w3-bar-item w3-button">Link 1</a>
              <a href="#" className="w3-bar-item w3-button">Link 2</a>
              <a href="#" className="w3-bar-item w3-button">Link 3</a>
            </div>
          </div>


        </div>
  
      </header>
    )
  }
}

export default Header