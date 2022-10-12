import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

function UseAuthStatus() {

    const [loggedin , setloggedin]=useState(false);
    const [checking , setchecking]=useState(true);


    useEffect(()=>{
         const auth=getAuth()
         onAuthStateChanged(auth, (user)=>{
            if(user){
                setloggedin(true)
            }
            setchecking(false)
         })
    })
  return {loggedin , checking }
  
}

export default UseAuthStatus