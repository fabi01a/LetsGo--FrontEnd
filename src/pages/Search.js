import React, { useState } from 'react';
import '../styles/Search.css';
import SubmitButton from '../components/SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Search = () => {
    const navigate = useNavigate();

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
            const response = await axios.get('https://letsgo-be-userprofile.onrender.com/get_campsite_data', {
                params: {                   
                    address: address,
                    radius: maxDistance,  
                },
            });
            // console.log(response.data)
            //processed data received from backend/use this later to pass along to other page
            //const processedData = response.data;
           navigate('/search/campsites');
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
                <SubmitButton navigate={navigate} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Search;