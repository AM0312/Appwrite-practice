import { createContext } from "react";

export const AuthContext = createContext<{
  authStatus: Boolean;
  setAuthStatus: (status: boolean) => void;
}>({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;
export default AuthContext;
