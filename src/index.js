import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gCc22OhDjcPdGBnDr8YVCLyuEETQ-C4",
  authDomain: "saios-todolit.firebaseapp.com",
  projectId: "saios-todolit",
  storageBucket: "saios-todolit.appspot.com",
  messagingSenderId: "386966664124",
  appId: "1:386966664124:web:ce303515fe70b99fbbf1b9",
  measurementId: "G-ENTQ3T224P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ReactDOM.render(<App />,document.getElementById('root'));

import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);