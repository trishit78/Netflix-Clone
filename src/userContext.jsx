// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase'; // Import your Firebase authentication module

// Create a new context
const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
