import React from 'react';
import moment from 'moment';
import summaryBG from '../../images/summaryBG.png';

const SongSummary = ({projectItem}) =>{
    // console.log(projectItem);
    return(
        <div className="card z-depth-0 song-summary">
            {/* <img src={summaryBG} alt="Summary background" className="summary-bg"/> */}
            <div className="card-content text-darken-3">
                <span className="card-title song-summary-title">{ projectItem.title }</span>
                <h6 className="artists">{ projectItem.artist }</h6>
                <p>Posted by {projectItem.authorFirstName} {projectItem.authorLastName}</p>
                <p className="">{ moment(projectItem.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
    )
}

export default SongSummary;