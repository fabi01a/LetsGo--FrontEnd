import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/users/`)
            .then((res) => {
                console.log("USER LIST RESPONSE:", res.data)
                setUsers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching user list:", err);
            });   
    }, []);

    return (
        <div>
            <h1>User List </h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/profile/${user.id}`}>{user.email}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;