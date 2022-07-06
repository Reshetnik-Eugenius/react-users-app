import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import PButton from "../button/PButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <PButton onClick={logout}>Logout</PButton>
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
            </div>
        </div>
    );
};

export default Navbar;
