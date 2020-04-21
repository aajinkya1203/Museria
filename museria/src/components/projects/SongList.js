import React from 'react';
import SongSummary from './SongSummary';

const SongList = () =>{
    return(
        <div className="songList section">

            <SongSummary />
            <SongSummary />
            <SongSummary />
            <SongSummary />

        </div>
    )
}

export default SongList;