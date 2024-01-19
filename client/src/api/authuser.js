import axios from 'axios'


export const postauthUser = async(value)=>{
    const addinguser = await axios.post('http://localhost:5001/auth/register',{...value})
    console.log(addinguser)
}


export const fetchAuthUser=async()=>{
    const token = localStorage.getItem('token')
    const {data} = await axios.get('http://localhost:5001/auth/me',{headers:{Authorization:token}})
    return data
}