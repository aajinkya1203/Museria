import React, { Component } from 'react';
import Notifications from './Notifications';
import SongList from '../projects/SongList';
import abstractBG from '../../images/abstractBG.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        // console.log(this.props)
        const { project, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="dashboard container">
                <img src={ abstractBG } className="mainBG" alt="Cover for Dashboard"/>
                <div className="row">
                    <div className="col s12 m6">
                        <SongList project = { project }/>
                    </div>
                    <div className="col s12 m5 offset-m1 notifs">
                        <Notifications notifications={ notifications }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    console.log(state);
    return{
        project: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'notifications', limit: 5},
        {collection:'projects',orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard);