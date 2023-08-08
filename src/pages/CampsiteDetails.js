import React from 'react';
import { useLocation } from 'react-router-dom';

const CampsiteDetails = () => {
    const location = useLocation();
    const campsiteData = location.state || [];
    //check if state obj is null or not
    console.log('State:', campsiteData);

    return (
        <div>
            <header>
                {campsiteData.facility_map_url ? (
                    <img src={campsiteData.facility_map_url} alt={`Map for ${campsiteData.name}`} />
                ) : (
                    <h2>{campsiteData.name || 'N/A'}</h2>
                )}
            </header>
            
            {/* <p>Address: {address}</p> */}
            <p>Phone: {campsiteData.facility_phone || 'N/A'}</p>
            <p>Directions: {campsiteData.facility_directions || 'N/A'}</p>
            <p>Description: {campsiteData.facility_description || 'N/A'}</p>
            <p>Map: {campsiteData.facility_map_url || 'N/A'}</p>
        </div>
    );
};
export default CampsiteDetails;