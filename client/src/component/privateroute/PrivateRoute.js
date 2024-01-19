import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {fetchAuthUser} from '../../api/authuser'

import {useDispatch,useSelector} from 'react-redux'
import { setAuth } from '../../redux/authSlice'


const PrivateRoute = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  const authUser = useSelector(state=>state.auth)

  console.log(' data  auth -_- => ',authUser)
  const getAcount=async()=>{
    try{
      const data = await fetchAuthUser()
      console.log('data login =WWWWWWWWWW/*  */', data)
      await dispatch(setAuth(data)) 
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getAcount()
  },[])

const token = localStorage.getItem('token')


 useEffect(()=>{
   (authUser.role === "admin" ? (<h1>un petit prob </h1>) : navigate('/home'))
 },[token,authUser])
  return (
    <div>

    </div>
    
  )
}

export default PrivateRoute