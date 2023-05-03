import {Role} from "./types";

export const RedirectRules= [
  { route: { path: "/", exact: true } },
  { route: { path: "/manager" }, only: [Role.MANAGER] },
  { route: { path: "/admin" }, only: [Role.ADMIN] },
  { route: { path: "/admin-manager" }, only: [Role.ADMIN, Role.MANAGER] }
];
