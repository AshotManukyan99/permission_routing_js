import * as React from "react";
import "./styles.css";

import { UserRoleSelector } from "./components/UserRoleSelector";
import { RoleProvider } from "./context/RoleContext";
import { AppRouter } from "./views";

export default function App() {
  return (
    <div className="App">
      <RoleProvider>
        <UserRoleSelector />
        <AppRouter />
      </RoleProvider>
    </div>
  );
}
