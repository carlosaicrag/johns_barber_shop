import React from 'react';
import Modal from "./modal/modal"
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
// import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';
import ForgotPasswordFormContainer from './auth/forgot_password_form_container';
import BarberQueueContainer from "../components/barber_profile/barber_container";
import Queue from "./queue/queue_container"
import ChooseHaircut from "./choose_haircut/choose_haircut_container"


export const App = () => (
  <div>
    <Modal />
    
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      <Route exact path={`/queue/:barberId`} component={BarberQueueContainer} />
      <AuthRoute exact path="/forgot-password" component={ForgotPasswordFormContainer} />
      {/* <Route exact path="/queue" component={BarberQueue} /> */}
      <Route exact path="/queue" component={Queue} />
      <Route exact path="/chooseHaircut" component={ChooseHaircut}/>
      <Route exact path="/" component={LogInFormContainer} />
    </Switch>
  </div>
);