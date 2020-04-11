import React, { createContext, useState, useContext } from 'react';

const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();
  const [userType, setUserType] = useState();
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  const { userData, setUserData } = context;
  return { userData, setUserData };
}
