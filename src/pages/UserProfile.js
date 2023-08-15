import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import useSWR from 'swr';
import fetcher  from "../utils/axios";

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const account = useSelector((state) => state.auth.account);

    const userId = account?.id;

    const { data, error, isLoading } = useSWR(`/user/${userId}/`, fetcher);
    console.log(data, error, isLoading)
    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate("/login");
    };
    
    return (
        <div className="w-full h-screen p-6 page-container">
            <h1>Welcome!</h1>

            <div className="mb-4">
                {!error && !isLoading ? (
                    <div>
                        <p>Email: {data.email}</p>
                        {/* <p>Other Profile Data: {user.data.otherField}</p> */}
                    </div>
                ) : (
                    <p>Loading user profile...</p>
                )}
            </div>
            <button
                onClick={handleLogout}
                className="rounded p-2 w-32 bg-red-700 text-black"
            >
                Logout
            </button>
        </div>
    );
};

export default UserProfile;