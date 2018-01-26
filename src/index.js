
//import React libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search_box';     //location of the search_box.js file

//create a new component to produce some html content/elements/tags etc
//generate html and put it on the page (in the DOM)
const App = () => {
    return (
    <div>
         <SearchBox /> 
    </div>);
}

//Youtube API
const YoutubeAPIKey = 'AIzaSyDtoiYBQU9pMe-AFGHRFSgrDZD_8fHv0ek'
//get the key from console.developer.google.com, search for API name: youtube data API v3

/*const App = function() {
    return <div> Hi first </div>
} */
ReactDOM.render(<App />, document.querySelector('.container'));

