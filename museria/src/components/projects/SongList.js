import React from 'react';
import SongSummary from './SongSummary';
import { Link } from 'react-router-dom';

const SongList = ({project}) =>{
    return(
        <div className="songList section">
            {project && project.map(projectItem =>{
                return(
                    <Link to={'/song/'+projectItem.id}  key={projectItem.id}>
                        <SongSummary projectItem = {projectItem} />
                    </Link>
                )
            })}
        </div>
    )
}

export default SongList;