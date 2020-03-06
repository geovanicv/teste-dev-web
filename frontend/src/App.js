import React from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './routes'
import logo from './assets/ignicao.svg'


export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="Ignição"></img>
      
      <div className="content">
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </div>
    </div>
  );
}


