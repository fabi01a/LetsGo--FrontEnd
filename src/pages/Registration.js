import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Registration = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegistration = (email, password) => {

        if(password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            return;
        }
        console.log("Sending registration request with email:", email, "and password:", password);

        axios
        .post(`${process.env.REACT_APP_API_URL}/auth/register/`, { email, password }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            setMessage("Registration successful! Please log in");
            setRegistrationSuccess(true);
            setLoading(false);
        })
        .catch((err) => {
            console.log("REGISTRATION ERROR", err);
            setMessage(err.response?.data?.detail?.toString() || "An error occured during registration. Please try again later.");
            setLoading(false);
        });
    };

    const registrationFormik = useFormik({
        initialValues: {
            registrationEmail: "",
            registrationPassword: "",
        },
        onSubmit: (values) => {
            setLoading(true);
            handleRegistration(values.email, values.password);
        },
        validationSchema: Yup.object({
            email: Yup.string().trim().required("A user name is required"),
            password: Yup.string().trim().required("Please enter a password"),
        }),
    });

    return (
        <div>
            <h1>Registration</h1>
            {registrationSuccess ? (
                <>
                    <p>{message}</p>
                    <p className="text-center mt-4">
                        Please <Link to="/login">log in here</Link>
                    </p>
                </>
            ) : (
                <form onSubmit={registrationFormik.handleSubmit}>
                    <div className="space-y-4">
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="registrationEmail"
                            type="email"
                            placeholder="Email"
                            name="registrationEmail"
                            value={registrationFormik.values.registrationEmail}
                            onChange={registrationFormik.handleChange}
                            onBlur={registrationFormik.handleBlur}
                        />
                        {registrationFormik.errors.registrationEmail ? <div>{registrationFormik.errors.registrationEmail} </div> : null}
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="registrationPassword"
                            type="password"
                            placeholder="Password"
                            name="registrationPassword"
                            value={registrationFormik.values.registrationPassword}
                            onChange={registrationFormik.handleChange}
                            onBlur={registrationFormik.handleBlur}
                        />
                        {registrationFormik.errors.registrationPassword ? (
                            <div>{registrationFormik.errors.registrationPassword} </div>
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
                            onClick={() => handleRegistration(registrationFormik.values.registrationEmail, registrationFormik.values.registrationPassword)}
                        >
                            Register
                        </button>
                    </div>
                </form> 
            )}
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
    );
};

export default Registration;