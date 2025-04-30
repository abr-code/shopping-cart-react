import { createContext, ReactNode, useRef, useState } from "react";

export type LoginContextType = {
  isLogged: boolean;
  loginUser: (token: string) => void;
  logoutUser: () => void;
  setAccessToken: (token: string) => void;
  getAccessToken: () => string;
};

export const LoginContext = createContext<LoginContextType | null>(null);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const accessToken = useRef<string>("");

  const loginUser = (token: string): void => {
    accessToken.current = token;
    setIsLogged(true);
  };

  const logoutUser = () => {
    accessToken.current = "";
    setIsLogged(false);
  };

  const setAccessToken = (token: string) => {
    accessToken.current = token;
  };

  const getAccessToken = () => {
    return accessToken.current;
  };

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        loginUser,
        logoutUser,
        setAccessToken,
        getAccessToken,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
