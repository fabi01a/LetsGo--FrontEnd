import React from 'react';
import '../styles/CampsiteDetails.css';
import { useLocation } from 'react-router-dom';

const CampsiteDetails = () => {
    const location = useLocation();
    const campsiteData = location.state || {};

    //function to strip HTML tags from a string
    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <div id='details-page-container'>
            <div id="details-left">
                <div id="details-left--image">
                    <img src="https://res.cloudinary.com/dgiopn7es/image/upload/v1691431257/Home_plcolb.jpg" alt="camping"/>
                        
                </div>
                <div id="details-left--facility-info">
                    <h2>{campsiteData.name || 'N/A'}</h2>
                        {/* <p>{facilityType}</p> */}
                        {/* <p>Address: {address}</p> */}
                    <p>Phone: {campsiteData.facility_phone || 'N/A'}</p>
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
            {/* <header>
                {campsiteData.facility_map_url ? (
                    <img src={campsiteData.facility_map_url} alt={`Map for ${campsiteData.name}`} 
                        onError={(e) => console.error('Image load error:', e)}/>
                ) : (
                    <h2>{campsiteData.name || 'N/A'}</h2>
                )}
            </header>  */}
        </div>
    );
};
export default CampsiteDetails;