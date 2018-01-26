//search box
import React, {Component} from 'react'  //Component from React.Component

/*const SearchBox = () => {
    return <input />;
}*/

class SearchBox extends Component {
    constructor(props) {    //all javaScript have constructor
        super(props);       //super here refered to Component class right above
        this.state = {term: ""};    //this.state exists in any class based javaScript
                                    //and it initiate the value = "" in the first place    
        //when ever create new object, this.state will update, like input text from search box
        //{term: ""} is an object
    }

    render() {      //the way we define a method in a class
        return (
            <div className="searchBox">                
                <input value = {this.state.term}    //controlled component
                onChange={(event) => this.onInputChange(event.target.value)} placeholder = 'input your search here' />
                
            </div>
        )
    }   //the arrow function syntax in ES6

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
    /*event handling
    onInputChange(event) {   //input changes from <input > with event or eventObject
        console.log(event.target.value) 
        //event = pobject, target = <input /> tag, value as its value
    }*/
}

export default SearchBox;