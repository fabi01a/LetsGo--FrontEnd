import React from 'react';
import '../styles/Search.css';
import SubmitButton from '../components/SubmitButton';


const Search = () => {
    //set up use state for starting point
    //take that info and run it w axios call to get lat/lon
    //

    return (
        <div id="search-container">
            <div id='search-container--top'>
                <img id="search-container--top--image"src="https://res.cloudinary.com/dvbdefnwx/image/upload/v1666621595/sample.jpg" alt="campsite tent"/> 
                <div>Choose Your Destination</div>
            </div>
            <div id='search-container--middle'>
                <div>
                    <input type="text"></input>
                    <div className="center-text bold-text">Starting Point</div>
                </div>
                <div>
                    <input type="text"></input>
                    <div className="center-text bold-text">Max Distance</div>
                </div>
            </div>
            <div id='search-container--bottom'>
                <SubmitButton></SubmitButton>
            </div>
        </div>
    );
};

export default Search;