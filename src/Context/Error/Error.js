// Context For Erorr 
import React, { useState, createContext } from "react";

export const ErrorContext = createContext(false);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);

  const data = [error, setError];

  return <ErrorContext.Provider value={data}>{children}</ErrorContext.Provider>;
};
