import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, clientLoggedIn }) => {

  return(
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn && !clientLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  )
    };

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id), clientLoggedIn: Boolean(state.session.clientId) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));