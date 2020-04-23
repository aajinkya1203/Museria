import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg'
import {createNewPost} from '../../actions/projectActions';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';


class CreateSongProject extends Component {
    state={
        title:'',
        artist:'',
        content:''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createProject(this.state,this.props.firebase);
    }
    
    render() {
        return (
            <div className="container">
                <img src={logInCover} className="signInFace" alt="Cover for Song Project"/>
                <form onSubmit={this.handleSubmit} className="" id="signInForm">

                <h4 className="grey-text text-darken-3">New Post</h4>
                    <div className="input-field">
                        <label htmlFor="title">Song Title:</label>
                        <input id="title" type="text" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="artist">Artist:</label>
                        <input id="artist" type="text" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Song Description:</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink z-depth-0">Create !</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project,fb)=>dispatch(createNewPost(project,fb))
    }
}

export default withFirebase(connect(null,mapDispatchToProps)(CreateSongProject));
