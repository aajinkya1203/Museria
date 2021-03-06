import React from 'react';
import moment from 'moment';

const Notifications = (props) =>{
    const { notifications } = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications:</span>
                    <ul className="notification">
                        {
                            notifications && notifications.map(notif=>{
                                return(
                                    <li key={notif.id}>
                                        <span className="pink-text">{ notif.notification.user } </span>
                                        <span>{ notif.notification.content }</span>
                                        <div className="grey-text notif-date">
                                            {moment(notif.notification.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;