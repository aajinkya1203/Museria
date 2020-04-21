import React, { Component } from 'react';
import Notifications from './Notifications';
import SongList from '../projects/SongList';
import abstractBG from '../../images/abstractBG.svg';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <img src={ abstractBG } className="mainBG"/>
                <div className="row">
                    <div className="col s12 m6">
                        <SongList />
                    </div>
                    <div className="col s12 m5 offset-m1 notifs">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;