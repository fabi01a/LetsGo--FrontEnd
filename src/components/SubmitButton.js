import React from 'react';
import "../styles/SubmitButton.css";
import { Button } from 'react-bootstrap';


const SubmitButton = ({ onSubmit }) => {
    const handleButtonClick = () => {
        onSubmit();
    };

    return (
        <div>
            <Button variant='success' size='lg' onClick={handleButtonClick}>Let's Go!</Button>
        </div>
    );
};
  
export default SubmitButton;