import React, { useContext, useState } from "react";
import { Role } from "../utils/types";


const RoleContext = React.createContext({
  role: Role.USER,
  setRole: () => {}
});

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(Role.USER);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
