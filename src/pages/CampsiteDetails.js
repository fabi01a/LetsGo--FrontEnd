import React from 'react';
import '../styles/CampsiteDetails.css';
import { useLocation } from 'react-router-dom';

const CampsiteDetails = () => {
    const location = useLocation();
    const campsiteData = location.state || {};

    //setting up address render so that it is not an object(cannot render objs)
    const address = campsiteData.facility_address || {};
    const streetAddress = address.street_address || 'Address not found';
    const city = address.city || '-';
    const state = address.state || '-';
    const postalCode = address.postal_code || '-';

    //function to strip HTML tags from a string
    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <div id='details-page-container'>
            <div id="details-left">
                <div id="details-left--image">
                    <img src={campsiteData.facility_image || 'https://res.cloudinary.com/dgiopn7es/image/upload/v1691697527/tent_mvsmqn.avif'} alt="camping tents"/>
                </div>
                <div id="details-left--facility-info">
                    <h2>{campsiteData.name || 'N/A'}</h2>
                        {/* <p>{facilityType}</p> */}
                        <p></p>
                        <p>{streetAddress} </p>
                        <p>{city} {state} {postalCode}</p>
                    <p>{campsiteData.facility_phone || 'Phone unavailable'}</p>
                </div>
            </div>
            <div id="details-right">
                <div id="details-right--description">
                    <h4>Description:</h4>
                    <p className="details-text">{stripHtmlTags(campsiteData.facility_description)|| 'N/A'}</p>
                </div>
                <div id="details-right--directions">
                    <h4>Directions:</h4>
                    <p className="details-text">{stripHtmlTags(campsiteData.facility_directions) || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};
export default CampsiteDetails;