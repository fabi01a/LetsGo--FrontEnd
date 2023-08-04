import React from 'react';
import "../styles/SubmitButton.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const SubmitButton = ({ onSubmit,navigateTo }) => {
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        if (typeof onSubmit === 'function') {
            await onSubmit();
        }
        if (typeof navigateTo === 'string') {
            navigate(navigateTo);
        }
    };

    return (
        <div>
            <Button variant='success' size='lg' onClick={handleButtonClick}>Let's Go!</Button>
        </div>
    );
};

SubmitButton.defaultProps = {
    onSubmit: () => {}
};

export default SubmitButton;