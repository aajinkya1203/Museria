const signup = (newUser,fb)=>{
    return(dispatch,getState)=>{
        fb.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return fb.firestore().collection('users').doc(resp.user.uid).set({
                firstName: newUser.fname,
                lastName:newUser.lname,
                initials:newUser.fname[0]+newUser.lname[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'});
        }).catch(err=>{
            dispatch({type:'SIGNUP_FAIL',err});
        })
    }
}

export default signup;