import React from "react";
import {Redirect, useLocation} from "react-router-dom";
import {usePermissionRedirect} from "../hooks/usePermissionRedirect";

export const RedirectHandler = ({children}) => {
    const {redirect} = usePermissionRedirect();
    const {pathname} = useLocation();

    if (redirect) {
        console.log(`Redirecting from: "${pathname}" to: "${redirect}"`);
        return <Redirect to={redirect}/>;
    }

    return <>{children}</>;
};
