import React from 'react';

const SongDetail =(props)=>{
    const id = props.match.params.id;
    return(
        <div className="container section songDetail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Song Title - {id}</span>
                    <h6 className="artists">Artist Names</h6>
                    <p className="songInfo">
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                        Compiling...
                    </p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Aajinkya Singh</div>
                    <div>21st April - 4:44 PM</div>
                </div>

            </div>
        </div>
    )
}

export default SongDetail;