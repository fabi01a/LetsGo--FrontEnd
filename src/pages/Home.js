import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
import SubmitButton from '../components/SubmitButton';

import axios from 'axios';

const Home = () => {
    return (
        <div>
            <Link to='/search'>
                <SubmitButton />
            </Link>
        </div>
    );
};

export default Home;