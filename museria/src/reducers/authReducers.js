const initState = {
    authError: null
}

const authReducers = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_FAIL':{
            console.log("error");
            return{
                ...state,
                authError:'Login Failed'
            }
        }
        case 'LOGIN_SUCCESS':{
            console.log("success");
            return{
                ...state,
                authError:null
            }
        }
        case 'SIGNOUT_SUCCESS':{
            console.log("signout success");
            return state;
        }
        case 'SIGNUP_SUCCESS':{
            console.log("signup success");
            return{
                ...state,
                authError:null
            }
        }
        case 'SIGNUP_FAIL':{
            console.log("signup failed");
            return{
                ...state,
                authError:action.err.message
            }
        }
        default:return state

    }
    return state;
}

export default authReducers;