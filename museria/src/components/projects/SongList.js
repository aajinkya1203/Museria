import React from 'react';
import SongSummary from './SongSummary';

const SongList = ({project}) =>{
    return(
        <div className="songList section">
            {project && project.map(projectItem =>{
                return(
                    <SongSummary projectItem = {projectItem} />
                )
            })}
        </div>
    )
}

export default SongList;