import React from "react";
import { useRoleContext } from "../context/RoleContext";

export const AdminManager = () => {
  const { role } = useRoleContext();
  console.log(`Visiting Manger&Admin page as ${role}`);

  return <p>This page is visible for manager and admin</p>;
};
