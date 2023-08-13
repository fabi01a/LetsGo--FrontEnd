import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegistration = (email, password) => {

        if(password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }

        axios
        .post(`http://${process.env.REACT_APP_API_URL}/auth/register/`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            setMessage('Registration successful! Please log in');
            setRegistrationSuccess(true);
            setLoading(false);
        })
        .catch((err) => {
            console.log('REGISTRATION ERROR', err);
            // setMessage('An error occured during registration. Please try again later.')
            setMessage(err.response?.data?.detail?.toString() ||'An error occured during registration. Please try again later.');
            setLoading(false);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email,password } = event.target.elements;
        console.log("Email:", email.value);
        console.log("Password:", password.value);
        handleRegistration(email.value, password.value);
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit = {handleSubmit}>
                <label>Email:</label>
                <input type='email' name='email' required />
                <label>Password: </label>
                <input type="password" name="password" required />
                <button type='submit' disabled={loading}>Register</button>
            </form>
            {passwordError && <p style={{ color: 'red '}}>{passwordError}</p>}
            {message && <p>{message}</p>}
            <p className='text-center mt-4'>
                Already have an account? <Link to="/login">Log in here</Link>
            </p>
            {registrationSuccess && <Login />}
        </div>
    );
};

export default Registration;