export const createNewPost = (project) =>{
    return(dispatch, getState) =>{
        //make some async call to db
        dispatch({type:'CREATE_PROJECT', project});
    }
}