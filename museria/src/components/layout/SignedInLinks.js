import React from 'react';
import { NavLink } from 'react-router-dom';
import signout from '../../actions/authActions2';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

const SignedInLinks = (props) =>{
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><a onClick={()=>{props.signOUT(props.firebase)}}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating btn-large white profile">AA</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signOUT:(fb)=>dispatch(signout(fb))
    }
}

export default withFirebase(connect(null,mapDispatchToProps)(SignedInLinks));