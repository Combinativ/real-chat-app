import React, { useRef, useState } from "react";

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([{}]);
  const [messages, setMessages] = useState([]);
  const [contact, setContact] = useState(false);
  const [sendTo, setSendTo] = useState({ id: "", name: "" });
  const [mobile, setMobile] = useState(false);

  const handleToggle = () => {
    setContact(!contact);
  };
  return (
    <UserContext.Provider
      value={{
        mobile,
        setMobile,
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        messages,
        setMessages,
        handleToggle,
        contact,
        sendTo,
        setSendTo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
