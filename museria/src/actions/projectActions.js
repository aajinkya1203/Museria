export const createNewPost = (project,fb) =>{
        //make some async call to db
        return(dispatch,getState)=>{
            const profileDetail = getState().firebase.profile;
            const uidFirebase = getState().firebase.auth.uid;
            fb.firestore().collection('projects').add({
                title:project.title,
                artist:project.artist,
                content:project.content,
                authorFirstName: profileDetail.firstName,
                authorLastName:profileDetail.lastName,
                authorID: uidFirebase,
                createdAt:new Date()
            }).then(()=>{
                dispatch({type:'CREATE_PROJECT', project});
            }).catch((err)=>{
                dispatch({type:'CREATE_PROJECT_FAILED', err});
            })
        }
 
}


