import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    // currentUser 
    // logout
    super(props)

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

    let headerOptions = <div className="nav-buttons-container">
      <div>
        <div>about</div>
      </div>
      <div>
        <div>barber login</div>
      </div>
      <div>
        <div>barber signup</div>
      </div>
      <div>
        <div>testimonials</div>
      </div>
    </div>

    return (
      <header id="header-container">
        <Link to="/queue" className="logo"> John's Barber Shop </Link>
        <div>
          {headerOptions}
        </div>
      </header>
    )
  }
}

export default Header