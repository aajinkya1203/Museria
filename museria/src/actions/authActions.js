const signIN = (credentials,fb)=>{
    return(dispatch,getState)=>{
        fb.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_FAIL'});
        })
    }
}

export default signIN;