import React from "react";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedLister } from "../utils/firebase/firebaseutils";

//as the actual value we want to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedLister(() => {});
  // }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//
