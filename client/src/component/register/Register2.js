import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"
import './register2.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postauthUser } from '../../api/authuser';
const Register2 = () => {
    const [name,setName]=useState('')
 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const navigate = useNavigate()
 
    
    const  handleFormSubmittion =async(e)=> {
      try{
    
  
  await postauthUser(e)
       await  toast('Good Job!', {
        icon: '👏',
      });
  navigate('/login')
      }catch(error){
        console.error('Login error:', error);
        toast.error("This didn't work.")
      }
     }
     function handleFileTitle (e) {
       setName (e.target.value);
     }
   
   function handelemial(z){
     setEmail(z.target.value)
   }
   function handelpassword(z){
    setPassword(z.target.value)
  }
    //  function handleUploadedFile (e) {
    //    setPhoto (e.target.value);
    //  }
  return (
<React.Fragment>
<h1>File upload</h1>
<form
  encType="multipart/form-data"
  onSubmit={handleFormSubmittion}
  id="form"
>


  <label>File title:</label><br />
  <input
    type="text"
    placeholder="Enter ur name "
    name="fileTitle"
    value={name}
    onChange={handleFileTitle}
    required
  />
  <br />
  <br />
  <label>File title:</label><br />
  <input
    type="text"
    placeholder="Enter email title"
    name="email"
    value={email}
    onChange={handelemial}
    required
  />
  <br />
  <br />
  <label>File title:</label><br />
  <input
    type="text"
    placeholder="Enter password title"
    name="email"
    value={password}
    onChange={handelpassword}
    required
  />
  <button type="button" onClick={()=>handleFormSubmittion({name,email,password})}>Submit Form</button>
</form>

</React.Fragment>
  )
}

export default Register2
