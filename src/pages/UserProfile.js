import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import useSWR from 'swr';
import { fetcher } from "../utils/axios";

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
        <div className="w-full h-screen">
            <div className="w-full p-6">
            <button
                onClick={handleLogout}
                className="rounded p-2 w-32 bg-red-700 text-black"
            >
                Logout
            </button>
        </div>
        {
            user.data ? (
                <div className="w-full h-full text-center items-center">
                    <p className="self-center my-auto">Welcome, {user.data?.username}</p>
                </div>
            ) : (
                <p className="text-center items-center">Loading...</p>
            )
        }
        </div>
    );
};

export default UserProfile;