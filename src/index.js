import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from './redux/reducers';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root'));
  // registerServiceWorker();
