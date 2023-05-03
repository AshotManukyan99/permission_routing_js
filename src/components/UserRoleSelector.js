import React from "react";
import {Role} from "../utils/types";
import {useRoleContext} from "../context/RoleContext";

export const UserRoleSelector = () => {
    const {role, setRole} = useRoleContext();
    const {USER, MANAGER, ADMIN} = Role;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left"
            }}
        >
            <label>
                <input
                    type="radio"
                    value={USER}
                    checked={role === USER}
                    onChange={() => setRole(USER)}
                />
                <span>User</span>
            </label>

            <label>
                <input
                    type="radio"
                    value={MANAGER}
                    checked={role === MANAGER}
                    onChange={() => setRole(MANAGER)}
                />
                <span>Manager</span>
            </label>

            <label>
                <input
                    type="radio"
                    value={ADMIN}
                    checked={role === ADMIN}
                    onChange={() => setRole(ADMIN)}
                />
                <span>Admin</span>
            </label>
        </div>
    );
};
