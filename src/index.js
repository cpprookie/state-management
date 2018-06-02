import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import { Provider } from 'mobx-react'
import AppStore from './models/AppModel'

const store = new AppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

