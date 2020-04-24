import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import signup from '../../actions/authActions3';
import { withFirebase } from 'react-redux-firebase';

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
        // console.log(this.state);
        this.props.signUP(this.state,this.props.firebase);
    }
    
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/' />
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
                    
                    {authError ? 
                        <div className="error container center red-text">
                            <p>{authError}</p>
                        </div>:
                        null
                    }
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signUP: (newUser,fb)=>dispatch(signup(newUser,fb))
    }

}

export default withFirebase(connect(mapStateToProps,mapDispatchToProps)(SignUp));
