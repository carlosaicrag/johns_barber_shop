import React from 'react';
import { Link } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: "",
      lname: "",
      barber: "false",
      barber_shop_password: ""
    };

    this.displayErrors = true;
    this.displaySignupConfirmation = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderSignupConfirmation = this.renderSignupConfirmation.bind(this);
    this.handleSubmitWithDefaultUsername = this.handleSubmitWithDefaultUsername.bind(this);
    this.renderFnameField= this.renderFnameField.bind(this);
    this.renderLnameField= this.renderLnameField.bind(this);
    this.handleCheck = this.handleCheck.bind(this)

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Set the username to first part of email if there is no username
    // if (this.state.username.replace(/ /g, '') === '') {
    //   this.setState({
    //     username: this.state.email.split('@')[0]
    //   }, this.handleSubmitWithDefaultUsername)
    // } else {
      if(this.state.barber === "true"){
        const user = Object.assign({}, this.state);
        this.props.processBarberForm(user).then((res) => 
        {
        this.props.history.push(`/queue/${res.currentUser.id}`);
        this.props.updateBarberWorkingStatus({id: res.currentUser.id, fname: res.currentUser.fname, lname: res.currentUser.lname, image_url: res.currentUser.image_url, working: false})
      })
      }else{
        const client = Object.assign({}, this.state);
        this.props.processClientForm(client).then(() => this.props.history.push("/"));
      }
    // }
  }

  handleSubmitWithDefaultUsername() {
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(()=> this.props.history.push("/queue"));
    this.displayErrors = true;
    this.displaySignupConfirmation = true;
  }

  renderSignupConfirmation() {
    if (this.displaySignupConfirmation && this.props.formType === 'signup' && this.props.signupConfirmation) {
      return (
        <ul>
          <li key="signUpConfirmation" className="session__msg--confirmation">
            {this.props.signupConfirmation}
          </li>
        </ul>
      )
    } else {
      return null
    }
  }

  renderErrors() {
    if (this.displayErrors) {
      return (
        <div>
          {this.props.errors.map((error, i) => (
            <div key={`error-${i}`} className="session__msg--error">
              {error}
            </div>
          ))}
        </div>
      )
    } else {
      return null
    }
  }

  renderUsernameInput() {
    if (this.props.formType === 'signup') {
      return (
        <label className="session__input-container">
          Username
          <br />
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="session__textbox"
          />
        </label>
      )
    }

    return null
  }

  renderFnameField(){
    if(this.props.location.pathname === "/signup"){
      return(
        <label className="session__input-container">
          First Name
                <br />
          <input type="text"
            value={this.state.fname}
            onChange={this.update('fname')}
            className="session__textbox"
          />
        </label>
      )
    }else{
      return []
    }
  }

  renderLnameField(){
    if (this.props.location.pathname === "/signup"){
      return(
        <label className="session__input-container">
          Last Name
                <br />
          <input type="text"
            value={this.state.lname}
            onChange={this.update('lname')}
            className="session__textbox"
          />
        </label>
      )
    }else{
      return []
    }
  }

  handleCheck(e){
    if (e.currentTarget.value === "false"){
      e.value = "true"
      this.setState({barber: "true"})
    }else{
      e.value = "false"
      this.setState({barber: "false"})
    }
  }

  renderAreYouBarber(){
      return (
        <label> Are you a Barber?
          <input type="checkbox" name="" id="is-barber" value={this.state.barber} onChange={this.handleCheck}/>
        </label>
      )
  }

  renderBarberPassword(){
    if(this.state.barber === "true"){
      return(
        <label className="session__input-container">
          Barber Shop Password
          <br />
          <input type="password"
            value={this.state.barber_shop_password}
            onChange={this.update('barber_shop_password')}
            className="session__textbox"
          />
        </label>
      )
    }
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render() {
    return (
      <div className="session__form-container">
        <div className="session__form-container-opacity">
          <div className="session__form-box">
            <form onSubmit={this.handleSubmit}>
              
              <div className="session-text">
                Welcome to John's Barber Shop!
              </div>

              <br />

              <div className="session-text"> 
                Please {this.props.formType} to continue
              </div>

              <br/>

              {this.renderErrors()}
              {this.renderSignupConfirmation()}

              <br/>

              {this.renderFnameField()}
              {this.renderLnameField()}

              <label className="session__input-container">
                Email
                  <br />
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session__textbox"
                />
              </label>

              <div>
                <label className="session__input-container">
                  Password
                    <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session__textbox"
                  />
                </label>

                {this.renderAreYouBarber()}
                <br/>
                {this.renderBarberPassword()}
                <br/>

                <Link
                  to="/forgot-password"
                  className="session__link">
                  forgot password?
                </Link>
                <br/>

                

                <div className="session__btn--submit" onClick={this.handleSubmit}>
                  <input type="submit" value={this.props.formType} />
                </div>

                <br />
              </div>
            </form>
            <br />

            
            <div>
              {this.props.navLink}
            </div>
          </div>
        </div>
      </div>

      // <div>hi</div>
    );
  }
}