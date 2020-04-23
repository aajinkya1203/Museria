import React, { Component } from 'react';
import Notifications from './Notifications';
import SongList from '../projects/SongList';
import abstractBG from '../../images/abstractBG.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component{
    render(){
        // console.log(this.props)
        const { project } = this.props;
        return(
            <div className="dashboard container">
                <img src={ abstractBG } className="mainBG" alt="Cover for Dashboard"/>
                <div className="row">
                    <div className="col s12 m6">
                        <SongList project = { project }/>
                    </div>
                    <div className="col s12 m5 offset-m1 notifs">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    console.log(state);
    return{
        project: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard);