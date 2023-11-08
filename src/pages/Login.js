import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import authSlice from "../store/slices/auth";

const Login = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        console.log("Attempting login....", process.env)
        axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login/`, { email, password })
        .then((res) => {
            console.log("Login response:", res.data)
            dispatch(
                authSlice.actions.setAuthTokens({
                    token: res.data.access,
                    refreshToken: res.data.refresh,
                })
            );
            dispatch(authSlice.actions.setAccount(res.data.user));
            setLoading(false);
            navigate("/profile");
        })
        .catch((err) => {
            console.log(err)
            setMessage(err.response?.data?.detail?.toString() || "An error occured. Please try again later.");
        });
    };

    const loginformik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            setLoading(true);
            handleLogin(values.email, values.password);
        },
        validationSchema: Yup.object({
            email: Yup.string().trim().required("A user name is required"),
            password: Yup.string().trim().required("Please enter a password"),
        }),
    });

    return (
        <div className="h-screen flex bg-gray-bg1 page-container" >
            <div className="w-full max-w-md m-auto rounded-lg py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center ">
                    Log in to your account 🔐
                </h1>
                <form onSubmit={loginformik.handleSubmit}>
                    <div className="space-y-4">
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={loginformik.values.email}
                            onChange={loginformik.handleChange}
                            onBlur={loginformik.handleBlur}
                        />
                        {loginformik.errors.email ? <div>{loginformik.errors.email} </div> : null}
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginformik.values.password}
                            onChange={loginformik.handleChange}
                            onBlur={loginformik.handleBlur}
                        />
                        {loginformik.errors.password ? (
                            <div>{loginformik.errors.password} </div>
                        ) : null}
                    </div>
                    <div className="text-danger text-center my-2" hidden={false}>
                        {message}
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded border-gray-300 p-2 w-32 bg-blue-700 text-black"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className='text-center mt-4'>
                    Don't have an account? <Link to="/login/registration">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;