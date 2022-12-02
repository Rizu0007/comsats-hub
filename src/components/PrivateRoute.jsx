import React from 'react'
import { Outlet, Navigate } from 'react-router'
import UseAuthStatus from '../hook/UseAuthStatus'
import Spinner from './spinner';

const PrivateRoute = () => {
const {loggedin ,checking}=UseAuthStatus();
if(checking){
    return <Spinner/>
}

  return  loggedin ? <Outlet />: <Navigate to="/Hold"/> 
  

}

export default PrivateRoute