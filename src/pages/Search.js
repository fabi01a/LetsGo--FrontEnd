import React, { useState } from 'react';
import '../styles/Search.css';
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';


const Search = () => {
    const[address, setAddress] = useState("");
    const[maxDistance, setMaxDistance] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleMaxDistanceChange = (e) => {
        const userInput = e.target.value;
        if (!isNaN(userInput) && userInput !== '') {
            setMaxDistance(userInput);
        }
    }

    const handleSubmit = async () => {
        try {
            const geocodingApiKey = 'pk.b87d71377e6d6c91ff3e5b1c88207b21';
            const geocodingURL = `https://us1.locationiq.com/v1/search.php?key=${geocodingApiKey}&q=${encodeURIComponent(address)}&format=json`;
            
            const geocodingResponse = await axios.get(geocodingURL);
            const { lat,lon } = geocodingResponse.data[0];
            const maxDistanceValue = parseFloat(maxDistance);

            const ridbApiKey = '8a67c918-75dc-4098-8b07-0f630608990a';
            const ridbUrl = `https://ridb.recreation.gov/api/v1/campsites?latitude=${lat}&longitude=${lon}&radius=${maxDistanceValue}&apikey=${ridbApiKey}`;

            const campsitesResponse = await axios.get(ridbUrl);
            const campsitesData = campsitesResponse.data;

            console.log('Campsites Data', campsitesData);
        }   catch (error) {
            console.error('Error occured', error);
        }
    };

    return (
        <div id="search-container">
            <div id='search-container--top'>
                <img id="search-container--top--image"src="https://res.cloudinary.com/dvbdefnwx/image/upload/v1666621595/sample.jpg" alt="campsite tent"/> 
                <div>Choose Your Destination</div>
            </div>
            <div id='search-container--middle'>
                <div>
                    <input type="text" value={address} onChange={handleAddressChange} />
                    <div className="center-text bold-text">Starting Point</div>
                </div>
                <div>
                    <input type="text" value={maxDistance} onChange={handleMaxDistanceChange} />
                    <div className="center-text bold-text">Max Distance</div>
                </div>
            </div>
            <div id='search-container--bottom'>
                <SubmitButton handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Search;