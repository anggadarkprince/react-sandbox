import React from 'react';
import './VideoItem.css';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <p className="content">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;