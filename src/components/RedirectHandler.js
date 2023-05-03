import React from "react";
import {Redirect, useLocation} from "react-router-dom";
import {useRedirect} from "../hooks/useRedirect";

export const RedirectHandler = ({children}) => {
    const {redirect} = useRedirect();
    const {pathname} = useLocation();

    if (redirect) {
        console.log(`Redirecting from: "${pathname}" to: "${redirect}"`);
        return <Redirect to={redirect}/>;
    }

    return <>{children}</>;
};
