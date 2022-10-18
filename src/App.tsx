import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Userinfosignin from './Components/Userinfosignin';
import Userinfosignup from './Components/Userinfosignup';
import Success from './Components/Success';
import Homescreen from './Pages/Homescreen';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Userinfosignin />} />
          <Route path="/homescreen" element={<Homescreen />}></Route>
          <Route path="/signup" element={<Userinfosignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
