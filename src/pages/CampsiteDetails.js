import React from 'react';

const CampsiteDetails = (props) => {
    //extract the data from the location state
    const { address, phone, direction, description, mapUrl } = props.location.state;
    
    return (
        <div>
            <><h2>{props.match.params.facilityName}</h2><p>Address: {address}</p><p>Phone: {phone}</p><p>Directions: {direction}</p><p>Description: {description}</p><p>Map: {mapUrl}</p></>
        </div>
    );
};
export default CampsiteDetails;