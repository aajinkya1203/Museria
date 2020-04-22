import React from 'react';

const SongSummary = ({projectItem}) =>{
    return(
        <div className="card z-depth-0 song-summary" key={projectItem.id}>
            <div className="card-content text-darken-3">
                <span className="card-title song-summary-title">{ projectItem.title }</span>
                <h6 className="artists">{ projectItem.artist }</h6>
                <p>Posted by Aajinkya Singh</p>
                <p className="">21st April - 4:44 PM</p>
            </div>
        </div>
    )
}

export default SongSummary;