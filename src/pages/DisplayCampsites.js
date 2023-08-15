import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useLocation, Link } from "react-router-dom";
import "../styles/DisplayCampsites.css";

const DisplayCampsites = () => {
    const location = useLocation();
    const processedData = location.state || [];

    return (
        <div className="page-container">
            <MDBTable hover>
                <MDBTableHead id="table-head">
                    <tr className="table-warning"> 
                        <th scope="col">#</th>
                        <th scope="col">Facility Name</th>
                        <th scope="col">Facility Address</th>
                        <th scope="col">Facility Phone Number</th>
                    </tr>
                </MDBTableHead>
            <MDBTableBody>
                {processedData.map((campsite, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                            <Link 
                                to={`/search/campsites/${campsite.facility_name}`}
                                state= {{ 
                                            name: campsite.facility_name,
                                            facility_address: campsite.facility_address,
                                            facility_phone: campsite.facility_phone,
                                            facility_directions: campsite.facility_directions,
                                            facility_description: campsite.facility_description,
                                            facility_image: campsite.facility_image_url,
                                }}
                                className="link"
                            >
                        {campsite.facility_name}
                        </Link>
                        </td>
                        <td>
                            {campsite.facility_address ? (
                                `${campsite.facility_address.street_address}  ${campsite.facility_address.city} ${campsite.facility_address.state} ${campsite.facility_address.postal_code}`
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>{campsite.facility_phone || "Not Available"}</td>
                        </tr>
                    ))} 
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default DisplayCampsites;