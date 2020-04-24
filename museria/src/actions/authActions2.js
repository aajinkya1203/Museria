const signout = (fb) =>{
    return(dispatch,getState)=>{
        fb.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        });
    }
}

export default signout;