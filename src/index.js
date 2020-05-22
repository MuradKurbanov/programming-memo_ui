import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import Store from "./store/store";

import { App } from './app/App';

import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
