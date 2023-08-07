import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import SubmitButton from '../components/SubmitButton';

const Home = () => {
    return (
        <div id="home-container">
            <div className="row-1">
                {/* <div>Choose Your Adventure</div> */}
                <img src='/Home.jpg' alt='' style={{ width: '500px', height: '250px'}} />
            </div>
            <div className="row-2"></div>
            <div id="submit-button-container">
                <Link to='/search'>
                    <SubmitButton navigateTo='/search' />
                </Link>
            </div>
        </div>
    );
};

export default Home;