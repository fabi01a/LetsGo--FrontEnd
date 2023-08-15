import React from "react";

const AuthContext = React.createContext();

function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

function AuthProvider(props) {
    const [user, setUser] = React.useState(null);

    const signin = (email, password, cb) => {
        if (email === "user@example.com" && password === "password") {
            setUser({ email });
            cb();
        } else {
        throw new Error("Incorrect email or password");
        }
    };

    const signout = (cb) => {
        setUser(null);
        cb();
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };