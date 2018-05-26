import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toolPicker from './reducers/reducer';

const store = createStore(toolPicker);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

