import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        name:"user redux",
        lastname:"user redux ", 
        email:"userredux@gmail.com",
        password:"userredux",
token:null,
        role:""
    },
reducers:{
    setAuth:(state,action)=>{
        return action.payload
    }
}
})

export const {setAuth} = authSlice.actions 
export default authSlice.reducer