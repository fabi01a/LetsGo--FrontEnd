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

    const user = useSWR(`/user/${userId}/`, fetcher);

    const handleLogout = () => {
        dispatch(authSlice.actions.logout());
        navigate("/login");
    };
    
    return (
        <div className="w-full h-screen p-6">
            <h1>User Profile</h1>

            <div className="mb-4">
                {user.data ? (
                    <div>
                        <p>Email: {user.data.email}</p>
                        <p>Other Profile Data: {user.data.otherField}</p>
                    </div>
                ) : (
                    <p>Loading user profile...</p>
                )}
            </div>

            <div className="text-center">
                {user.data ? (
                    <p>Welcome, {user.data?.username}</p>
                ) : (
                    <p>Loading...</p>
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