const initState = {
    project:[
        {id:1, title:'Ivy', artist:'Frank Ocean', content:'in love with this song'},
        {id:2, title:'Pink + White', artist:'Frank Ocean', content:'in love with this song'},
        {id:3, title:'Tossie Slide', artist:'Drake', content:'its catchy!'},
        {id:4, title:'Smooth Criminal', artist:'MJ', content:'cause the guy IS a GOAT'},
        {id:5, title:'King Kunta', artist:'Kendrick Lamar', content:'its got a vibe to it'},
    ]
}

const projectReducers = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':{
            console.log("created project", action.project);
            return state;
        }
        case 'CREATE_PROJECT_FAILED':{
            console.log("create project failed", action.err);
            return state;
        }
        default:{
            return state;
        }
    }
}

export default projectReducers;