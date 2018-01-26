
//import React libraries
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_box';     //location of the search_box.js file
import YTSearch from 'youtube-api-search'  //import from youtube-api that was installed before
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
//Youtube API
const YoutubeAPIKey = 'AIzaSyDtoiYBQU9pMe-AFGHRFSgrDZD_8fHv0ek'
//get the key from console.developer.google.com, search for API name: youtube data API v3
//create a new component to produce some html content/elements/tags etc
//generate html and put it on the page (in the DOM)
class App extends Component {   //class based
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};
        this.videoSearch('react');
    }



    videoSearch(term) {     //define a method of class App, will pass to the SearchBox
        YTSearch({key:YoutubeAPIKey, term: term}, //term: "django" is the youtube topic
        (videos) => {this.setState({videos:videos,
        selectedVideo: videos[0]})
        } ) //note that if the key and value is the same string, the key canbe elimited
            //just like this: (videos) => {videos:videos}  = (videos) => {videos}

    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
        //call the function 1 in every 300 ms
        return (
        <div>
            <SearchBox onSearchTermChange={videoSearch} /> 
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
            //the onVideoSelect was passed to VideoList as a property (props) 
            onVideoSelect = {(selectedVideo) => this.setState({selectedVideo:selectedVideo})}
            videos={this.state.videos} />
        </div>);
    }
}




/*const App = function() {
    return <div> Hi first </div>
} */
ReactDOM.render(<App />, document.querySelector('.container'));

