import React, { createContext, useState, useContext } from 'react';

export const UserDataContext = createContext();

export const DataProvider = ({ children }) => {

  const [user, setUser] = useState({
    email:'',
    firstName:'',
    lastName:'',
  });

  return (
    <div>
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

