import React from 'react'
import Home from './page/Home'
import { BrowserRouter ,  Route, Router, Routes} from 'react-router-dom';
import Offer from "./page/Offer"
import Header from './components/Header';
import Hold from './page/Hold'
import Signup from './page/Signup';
import Forgotpassword from './page/Forgotpassword';


const App = () => {
  return (
  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/Offer" element={<Offer />}></Route>
      <Route path='Hold' element={<Hold />}></Route>
      <Route path='Signup' element={<Signup />}></Route>
      <Route path='Forgotpassword' element={<Forgotpassword />}></Route>




    </Routes>
  </BrowserRouter>
   


  
  );
}

export default App

