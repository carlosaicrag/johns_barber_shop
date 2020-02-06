import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from './store/store';
import { Root } from './components/root';
import {fetchBarber} from './actions/barber_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  window.fetchBarber = fetchBarber
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});