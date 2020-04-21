import React from 'react';

const SongSummary = () =>{
    return(
        <div className="card z-depth-0 song-summary">
            <div className="card-content text-darken-3">
                <span className="card-title song-summary-title">Song Title</span>
                <h6 className="artists">Artist Names</h6>
                <p>Posted by Aajinkya Singh</p>
                <p className="">21st April - 4:44 PM</p>
            </div>
        </div>
    )
}

export default SongSummary;