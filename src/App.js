import React from 'react'
import Home from './page/Home'
import { BrowserRouter ,  Route, Router, Routes} from 'react-router-dom';
import Offer from "./page/Offer"
import Signin from './page/Signin';
import Header from './components/Header';


const App = () => {
  return (
  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/Offer" element={<Offer />}></Route>
      <Route path="/Signin" element={< Signin/>}></Route>


    </Routes>
  </BrowserRouter>
   


  
  );
}

export default App

