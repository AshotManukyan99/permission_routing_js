import {useLocation, matchPath} from "react-router-dom";
import {useRoleContext} from "../context/RoleContext";
import {RedirectRules} from "../utils/redirectRules";

export const useRedirect = () => {
    const {role} = useRoleContext();
    const {pathname} = useLocation();

    // Internal redirect logic
    const rule = RedirectRules.find((rule) => matchPath(pathname, rule.route));
    const hasMissingProps = !role || !rule;
    const shouldRedirect = rule?.only && rule.only.indexOf(role) < 0;

    console.log(shouldRedirect, 'shouldRedirect')

    if (hasMissingProps || shouldRedirect) {
        return {redirect: "/"};
    }

    return {};
};
