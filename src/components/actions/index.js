import axios from "axios";

export const signIn=(username)=>{
    return async(dispatch)=>{
        const response=await axios.post("/getuserinfo",{
            "username":username
        })
        const questions=await axios.get("/questions")
        console.log(questions);
        const obj={...response.data,username,...questions}
        console.log(obj)
        dispatch({type:'SIGN_IN',payload:obj})
    }
}

export const signOut=()=>{
    return{
        type:"SIGN_OUT"
    }
}