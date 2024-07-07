import { jwtTokenKey, userIdKey } from "./constants";

export const isAuthenticated = () => {
  return (
    !!localStorage.getItem(jwtTokenKey) || !!localStorage.getItem(userIdKey)
  );
};
