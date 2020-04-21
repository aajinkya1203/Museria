import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg'

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
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="container">
                <img src={logInCover} className="signInFace"/>
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

export default CreateSongProject;
