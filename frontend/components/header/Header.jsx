import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    // currentUser 
    // logout
    super(props)
    this.state = {dropDown: false,mobile:false};
    this.personalGreeting = this.personalGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.flipDropDownSwitch = this.flipDropDownSwitch.bind(this);
    this.handleModal = this.handleModal.bind(this)
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

  componentDidMount(){
    let that = this;

    window.addEventListener("resize",() =>{
      if(window.screen.width < 700){
        that.setState({mobile: true})
      }else{
        that.setState({mobile: false})
      }
    })
  }

  dropDown(e){
    this.state.dropDown ? this.setState({dropDown: false}): this.setState({dropDown:true})
  }

  flipDropDownSwitch(){
    if(!this.state.dropDown){
      this.setState({dropDown:true});
    }else if(this.state.dropDown){
      this.setState({dropDown:false});
    }
  }

  handleModal(e){
    this.props.openModal()
  }

  render(){
    let dropDownClassName;
    let logoutButton;

    if(this.props.currentUser){
      logoutButton = <div onClick={() => this.props.logout()}>logout</div>
    }
    if(window.screen.width < 700){
      if(this.state.dropDown){
        dropDownClassName = "drop-down-on"
      }else{
        dropDownClassName = "drop-down-off"
      }
    }else{
      dropDownClassName = "nav-buttons-container"
    }

    let headerOptions = <div className={dropDownClassName}>
      <div>
        <div>about</div>
      </div>
      <div>
        <div>client signup</div>
      </div>
      <div>
        <div>client login</div>
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

    let dropDown = <div className="drop-down-container" onClick={this.handleModal}>
      <img src="./haircut.png" alt=""/>
      {/* {headerOptions} */}
    </div>

    return(
      <header id="header-container">
        <Link to="/main" className="logo"> John's Barber Shop </Link>
        {dropDown}
      </header>
    )
  }
}

export default Header