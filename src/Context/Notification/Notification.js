import { useState, createContext } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const data = [open, setOpen, message, setMessage];

  return (
    <NotificationContext.Provider value={data}>
      {children}
    </NotificationContext.Provider>
  );
};
