/* context/UserContext.js */
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', isAuthenticated: false });
  const login = (name) => setUser({ name, isAuthenticated: true });
  const logout = () => setUser({ name: '', isAuthenticated: false });
  console.log('UserProvider rendered');

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
