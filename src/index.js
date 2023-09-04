import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxo877TsswhUBCHkKVkW-dkF8RNKIE4NY",
  authDomain: "chat-application-81d40.firebaseapp.com",
  projectId: "chat-application-81d40",
  storageBucket: "chat-application-81d40.appspot.com",
  messagingSenderId: "2055096139",
  appId: "1:2055096139:web:27fc6239e619e47b6acace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
