import React from 'react';
import "../styles/SubmitButton.css";
import { Button } from 'react-bootstrap';


const SubmitButton = ({ handleSubmit }) => {
    return (
        <div>
            <Button variant='success' size='lg' onClick={handleSubmit}>Let's Go!</Button>
        </div>
    );
};
  
export default SubmitButton;