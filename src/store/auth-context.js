import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  email: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const userLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const context = {
    token,
    email,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
