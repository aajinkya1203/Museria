import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        fname:'',
        lname:''
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
                <img src={logInCover} className="signInFace" alt="Cover for Signup"/>
                <form onSubmit={this.handleSubmit} className="" id="signInForm">

                <h4 className="grey-text text-darken-3">Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="fname">First Name:</label>
                        <input id="fname" type="text" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname">Last Name:</label>
                        <input id="lname" type="text" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink z-depth-0">Sign Up!</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignUp;
