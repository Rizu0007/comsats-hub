 import React, { useState , useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { async } from '@firebase/util'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {db} from '../Firebase'
import {FcHome} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import ListingItem from './../components/ListingItem';

const Profile = () => {
  const [listings , setListings]=useState(null)
  const [ loading , setloading]=useState(true)
const auth=getAuth()
const navigate=useNavigate();
const [ChangeDetail , setChangeDetail]=useState(false)

  const [formData , setformData]=useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    } 
  );
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }
 
  const {name , email}=formData;

  function onLogout(){
    auth.signOut()
    navigate("/")
  }
  function onChange(e){
  setformData((prevState)=>({
    ...prevState,
    [e.target.id]:e.target.value,
  }))
  }

  useEffect(() => {
    async function fetchUserListings() {
   
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap=await getDocs(q);
      let listings=[];
      querySnap.forEach((doc)=>{
        return listings.push({
          id:doc.id,
          data:doc.data(),

        })
      })
      setListings()    }
    fetchUserListings(listings)
    setloading(false)
  },[auth.currentUser.uid]);
    
  return (
    <>
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center mt-6 font-bold text-slate-400 hover:text-sky-400">My Profile</h1>
      <div className="w-full md:w-[50%] mt-6 px-3">
        <form>


      <input type='text' id='name' value={name} disabled={!ChangeDetail} 
      onChange={onChange}
       className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
        ChangeDetail && "bg-red-200 focus:bg-red-200"
      }`} />

      <input type='email' id='email' value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />
     <div className='flex justify-between whitespace-nowrap text-sm sm:text-xl'>
     <p className="flex items-center ">
     Do you want to change your name?
     <span   onClick={()=>{
      ChangeDetail && onSubmit() ;
     setChangeDetail((prevState) =>!prevState)
    }}
     className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
     >
     {ChangeDetail ? "Apply change" : "Edit"}
     </span>
   </p>
   <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">
   Sign out
 </p>
     </div>

     </form>
       <button type='submit' className='w-full bg-blue-400 text-white uppercase px-7 py-7 text-sm font-medium rounded shadow-md hover:bg-blue-700 translate duration-200 ease-out hover:shadow-lg active:bg-red-300'>
       <Link to='/CreateListing' className='flex justify-center items-center'>
       <FcHome className='mr-2 text-3xl bg-red-600 rounded-full p-1 border-2'/>
       </Link>
       
       Sell or Rent your Home

       </button>
       <h1>gh</h1>
    </div>
    </section>
    <div className="max-w-6xl px-3 mt-6 mx-auto">
    
      </div>
    </>
  )
}

export default Profile