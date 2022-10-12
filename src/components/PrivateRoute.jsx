import React from 'react'
import { Outlet, Navigate } from 'react-router'
import UseAuthStatus from '../hook/UseAuthStatus'

const PrivateRoute = () => {
const {loggedin ,checking}=UseAuthStatus();
if(checking){
    return <h3> ..loding</h3>
}

  return  loggedin ? <Outlet />: <Navigate to="/Hold"/> 
  

}

export default PrivateRoute