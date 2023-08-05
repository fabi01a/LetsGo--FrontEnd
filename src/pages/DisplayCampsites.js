import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useLocation, Link } from 'react-router-dom';
import '../styles/DisplayCampsites.css';

const DisplayCampsites = () => {
    const location = useLocation();
    console.log(location)
    //receive the campsite data from Search
    const processedData = location?.state?.processedData || [];
    console.log(processedData)
    return (
        <MDBTable hover>
            <MDBTableHead>
                <tr> 
                    <th scope='col'>#</th>
                    <th scope='col'>Facility Name</th>
                    <th scope='col'>Facility Address</th>
                    <th scope='col'>Facility Phone Number</th>
                </tr>
            </MDBTableHead>
        <MDBTableBody>
            {processedData.map((campsite, index) => (
                <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>
                        <Link to={{
                            pathname: '/campsites/${campsite.facility_name}',
                            state: {
                                name: campsite.facility_name,
                                address: campsite.facility_address,
                                phone: campsite.facility_phone,
                                directions: campsite.facility_directions,
                                description: campsite.facility_description,
                                map: campsite.facility_map_url
                            }
                        }}>
                            {campsite.facility_name}
                        </Link>
                    </td>
                    <td>{campsite.facility_address || 'N/A'}</td>
                    <td>{campsite.facility_phone}</td>     
                </tr>
                ))}
            </MDBTableBody>
        </MDBTable>
    );
};
export default DisplayCampsites;