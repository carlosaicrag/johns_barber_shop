import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from './store/store';
import { Root } from './components/root';
import {updateBarberWorkingStatus} from './actions/barber_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState;

  if (window.currentBarber || window.currentClientBarber) {
    if (window.currentBarber) {
      preloadedState = {
        session: { id: window.currentBarber.id, clientId: null },
        entities: {
          barbers: { [window.currentBarber.id]: window.currentBarber }
        }
      }
    } else {
      preloadedState = {
        session: { clientId: window.currentClientBarber.id },
        entities: {
          barbers: { [window.currentClientBarber.id]: window.currentClientBarber }
        }
      }
    }
    store = configureStore(preloadedState);
    // delete window.currentBarber;
  } else {
    store = configureStore();
  }
  window.store = store
  window.updateBarberWorkingStatus = updateBarberWorkingStatus
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});