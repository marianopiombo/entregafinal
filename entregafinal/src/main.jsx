import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAx61p0WMmuxI52yxqRR6L6boZzB8LU3dY",
  authDomain: "proyectofinal-react-ad063.firebaseapp.com",
  projectId: "proyectofinal-react-ad063",
  storageBucket: "proyectofinal-react-ad063.appspot.com",
  messagingSenderId: "592658490608",
  appId: "1:592658490608:web:2073b09ed2a3720c9a0e35"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
