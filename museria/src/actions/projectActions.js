export const createNewPost = (project,fb) =>{
        //make some async call to db
        return(dispatch,getState)=>{
            
            fb.firestore().collection('projects').add({
                title:project.title,
                artist:project.artist,
                content:project.content,
                authorFirstName:'Aajinkya',
                authorLastName:'Singh',
                authorID:12345,
                createdAt:new Date()
            }).then(()=>{
                dispatch({type:'CREATE_PROJECT', project});
            }).catch((err)=>{
                dispatch({type:'CREATE_PROJECT_FAILED', err});
            })
        }
 
}


