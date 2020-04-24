import React from 'react';
import { Link } from 'react-router-dom';
import smallCover from '../../images/smallCover.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) =>{
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return(
        <nav className = "nav-wrapper RootNavbar">
            <img src= { smallCover } alt="Cover for Navbar"/>
            <div className="container">
                <Link to='/' className="brand-logo titleText" title="Museria - Find the real you!">Museria</Link>
                    {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);