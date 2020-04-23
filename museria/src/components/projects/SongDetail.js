import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const SongDetail =(props)=>{
    const id = props.match.params.id;
    const { project } = props;
    if (project){    
        return(
            <div className="container section songDetail">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <h6 className="artists">{ project.artist }</h6>
                        <p className="songInfo">
                            { project.content }
                        </p>
                    </div>

                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                        <div>21st April - 4:44 PM</div>
                    </div>

                </div>
            </div>
        
        )
    }else{
        return(
            <div className="container center section">
                <h5>Loading Data...<br/>It'll only take a sec!</h5>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projectDocs = state.firestore.data.projects;   
    const project = projectDocs ? projectDocs[id] : null;
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(SongDetail);