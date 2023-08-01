import "../styles/SubmitButton.css";
import { Button } from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const SubmitButton = () => {
    return (
        <Button variant="success"size="lg">LetsGo!</Button>      
    );
};

export default SubmitButton;