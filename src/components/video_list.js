import React, {Component} from 'react'
import VideoListItem from './video_list_item'
import App from '../index'
const VideoList = (props) => {  //props exists anywhre in the class/method
    //const videos = props.videos;

    const VideoItems = props.videos.map((video) => {
        return (<VideoListItem 
            key={video.etag} 
            video = {video}
            //pass a viable of selectedVideo here
            onVideoSelect = {props.onVideoSelect}   //call property passed from VideoList
            //then, it pass this as property of VideoListItem, as called "callback"
            />)
    })

    return (
        <ul className="col-md-4 list-group" >
            {VideoItems}
        </ul>
    );
};

export default VideoList;