import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg'

class SignIn extends Component {
    state={
        email:'',
        password:''
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

                <h4 className="grey-text text-darken-3">Log In</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink z-depth-0">Log In</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn;
