import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { reminderModal } from "../actions/modal_actions"
import BarberIndexContainer from "../components/queue/barber_index_container"

const Auth = ({ component: Component, path, loggedIn, exact, clientLoggedIn }) => {
  return(
    <Route path={path} exact={exact} render={(props) => {
      if(!loggedIn && !clientLoggedIn){
        return <Component {...props} />
       }else{  
        return <Redirect to="/unauthorized"/>  
       }
    }} />
  )
    };


const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/unauthorized" />
    )
  )} />
);

const ProtectedNewHaircut = ({ component: Component, loggedIn, path, inQueue, exact, alreadyInQueue, reminderModal}) => {
  if (!loggedIn) {
    return(
      <Redirect to="/unauthorized"/>
    )
  }

  if (alreadyInQueue){
    return(
      null
      )
  }else{
    return(
      <Route path={path} exact={exact} render={(props) => (
        <Component {...props} />
      )} />
    )
  }
};

const mapStateToProps = state => {
  let alreadyInQueue = false;
  Object.keys(state.entities.clientHaircuts).forEach((clientHaircutKey) => {
    if (state.entities.clientHaircuts[clientHaircutKey].client_id == state.session.clientId) {
      alreadyInQueue = true
    }
  })

  let loggedIn =false

  if (state.session.id || state.session.clientId){
    loggedIn = true
  }

  return(
    { loggedIn: loggedIn, 
      clientLoggedIn: Boolean(state.session.clientId),
      alreadyInQueue: alreadyInQueue
    }
  )
};

const mapDispatchToProps = dispatch => (
  {
    reminderModal: (modalWording) => dispatch(reminderModal(modalWording)) 
  }
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedNewHaircutRoute = withRouter(connect(mapStateToProps,mapDispatchToProps)(ProtectedNewHaircut))