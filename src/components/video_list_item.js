import React, {Component} from 'react'

const VideoListItem = ({video, onVideoSelect}) => { //at its turn, VideoListItem take on
    // its item onVideoSelect, then call the function as following    
    const imageUrl = video.snippet.thumbnails.default.url
    return (
        <li onClick={() => onVideoSelect(video)} className = "list-group-items">
            {/* onVideoSelect was called right above */}
            <div className = "video-list media">
                <div className="media-left" >
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body" >
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;