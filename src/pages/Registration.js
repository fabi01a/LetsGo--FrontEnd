import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegistration = (email, password) => {
        setLoading(true);
        axios
        .post(`${process.env.REACT_APP_API_URL}/auth/register/`, { email, password })
        .then((res) => {
            setMessage('Registration successful! Please log in');
            setLoading(false);
        })
        .catch((err) => {
            setMessage('An error occured during registration. Please try again later.')
            setLoading(false);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email,password } = event.target.elements;
        handleRegistration(email.value, password.value);
    };

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit = {handleSubmit}>
                <label>Email:</label>
                <input type='email' name='email' required />
                <label>Password:</label>
                <input type="password" name="password" required />
                <button type='submit' disabled={loading}>Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Registration;