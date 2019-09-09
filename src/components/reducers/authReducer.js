
const INITIAL_STATE={
    isSignedIn:null,
    userDetails:null
}

export default (state=INITIAL_STATE,action)=>{
    if(action.type==="SIGN_IN")
    {
        console.log("Called Me ?")
        return {...state,isSignedIn:true,userDetails:action.payload}
    }
    if(action.type==="SIGN_OUT")
    {
        return {...state,isSignedIn:false,userDetails:null}
    }
    return state;
}