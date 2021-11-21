import './App.css';
import Pages from './pages';
import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import axios from 'axios';
import Routes from './Routes';

function App() {


  
  return (
    <div className="App">
        <Routes />
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
