import React from 'react';
import Modal from "./modal/modal"
import { AuthRoute, ProtectedRoute, ProtectedNewHaircutRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';
// import ForgotPasswordFormContainer from './auth/forgot_password_form_container';
import BarberQueueContainer from "../components/barber_profile/barber_container";
import BarberIndexContainer from "./queue/barber_index_container";
import ChooseHaircut from "./choose_haircut/choose_haircut_container";
import Error from "./error_pages/error";
import Unauthorized from "./error_pages/unauthorized";
import ClientProfileContainer from "./client_profile/client_profile_container"
import Footer from "./footer/footer.jsx"

export const App = () => (
  <div className="app">
    <Modal />
    
    <HeaderContainer />
    
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/queue" component={BarberQueueContainer} />
      <ProtectedRoute exact path="/clients/:id" component={ClientProfileContainer}></ProtectedRoute>
      {/* <AuthRoute exact path="/forgot-password" component={ForgotPasswordFormContainer} /> */}
      <Route exact path="/" component={BarberIndexContainer} />
      <ProtectedNewHaircutRoute exact path="/chooseHaircut" component={ChooseHaircut}/>
      <Route path="/error" component={Error}></Route>
      <Route path="/unauthorized" component={Unauthorized} />
      <Redirect to="/error"></Redirect>
    </Switch>

    <Footer />
  </div>
);