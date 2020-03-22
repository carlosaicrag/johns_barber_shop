import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from './store/store';
import { Root } from './components/root';
import {fetchBarber} from './actions/barber_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState;

  if (window.currentUser || window.currentClientUser) {
    if (window.currentUser) {
      preloadedState = {
        session: { id: window.currentUser.id, clientId: null },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }
      }
    } else {
      preloadedState = {
        session: { clientId: window.currentClientUser.id },
        entities: {
          users: { [window.currentClientUser.id]: window.currentClientUser }
        }
      }
    }
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  window.fetchBarber = fetchBarber
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});