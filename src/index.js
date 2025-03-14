/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {firebaseConfigue}  from "./firebase.configue"
import {store,persistor} from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate Loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>
   
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
