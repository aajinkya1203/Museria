import React from 'react';
import { Link } from 'react-router-dom';
import smallCover from '../../images/smallCover.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () =>{
    return(
        <nav className = "nav-wrapper RootNavbar">
            <img src= { smallCover } />
            <div className="container">
                <Link to='/' className="brand-logo titleText" title="Museria - Find the real you!">Museria</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;