import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div
            style={{
                background: "lightgrey",
                display: "flex",
                justifyContent: "space-between",
                padding: "24px",
                marginTop: "24px",
                textDecoration: "none"
            }}
        >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/manager">Manager Page</NavLink>
            <NavLink to="/admin">Admin Page</NavLink>
            <NavLink to="/admin-manager">Admin & Manager Page</NavLink>
        </div>
    );
};
