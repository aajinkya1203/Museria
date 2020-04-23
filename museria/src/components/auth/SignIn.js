import React, { Component } from 'react'
import logInCover from '../../images/loginCover.svg';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import signIN from '../../actions/authActions'

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
        this.props.signIn(this.state,this.props.firebase);
    }
    
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <img src={logInCover} className="signInFace" alt="Cover for Signin"/>
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
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds,fb)=>dispatch(signIN(creds,fb))
    }
}

export default withFirebase(connect(mapStateToProps,mapDispatchToProps)(SignIn));
