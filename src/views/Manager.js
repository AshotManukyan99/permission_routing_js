import React from "react";
import { useRoleContext } from "../context/RoleContext";

export const Manager = () => {
  const { role } = useRoleContext();
  console.log(`Visiting Manger page as ${role}`);

  return <p>This page is visible for manager only</p>;
};
