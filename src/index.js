import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'firebase/analytics'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5iKhKsI0R39L6r3FRAfRZBcpVdVdbCaY",
    authDomain: "members-only-9a252.firebaseapp.com",
    projectId: "members-only-9a252",
    storageBucket: "members-only-9a252.appspot.com",
    messagingSenderId: "227300022615",
    appId: "1:227300022615:web:a649db3306bb900722c612",
    measurementId: "G-C6DVCEFP7S"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("inited firebase")



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
