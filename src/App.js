import React from 'react'
import Home from './page/Home'
import { BrowserRouter ,  Route, Router, Routes} from 'react-router-dom';
import Offer from "./page/Offer"
import Header from './components/Header';
import Hold from './page/Hold'
import Signup from './page/Signup';
import Forgotpassword from './page/Forgotpassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile  from './page/Profile'
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './page/CreateListing';




const App = () => {
  return (
  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path='/Profile' element={<PrivateRoute/>}>
      <Route path='/Profile' element={<Profile/>} />
       
      </Route>
      <Route path="/Offer" element={<Offer />}></Route>
      <Route path='Hold' element={<Hold />}></Route>
      <Route path='Signup' element={<Signup />}></Route>
      
      <Route path='Forgotpassword' element={<Forgotpassword />}></Route>
      <Route path='createListing'  element={<PrivateRoute/>}>
      
      <Route path="/createListing" element={<CreateListing />}></Route>
      </Route>
   
      </Routes>
    <ToastContainer
      position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover 

/>

  </BrowserRouter>
   


  
  );
}

export default App

