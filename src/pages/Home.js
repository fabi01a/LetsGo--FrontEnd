import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ScrollingSelect from '../components/ScrollingSelect';
import SubmitButton from '../components/SubmitButton';

const Home = () => {
    const options = [
        {value: '🌊'},
        {value: '⛰️'},
        {value: '🚲'},
        {value: '🏕️'},
        {value: '🛶'}

    ];
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div id="home-container">
            <div className="row-1">
                <div id="row-1--title">Choose Your Adventure</div>
                <img id="row--1--image" src="https://res.cloudinary.com/dgiopn7es/image/upload/v1691431257/Home_plcolb.jpg" alt="woman with a map" />
            </div>
            <div className="row-2">
                <ScrollingSelect options={options} onChange={handleSelectChange} />
                <Link id='row-2--button' to='/search'>
                    <SubmitButton navigateTo='/search' />
                </Link>
            </div>
        </div>
    );
};

export default Home;