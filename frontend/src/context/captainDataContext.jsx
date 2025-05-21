
// Captain data context for managing captain-related state
import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateCaptain = (data) => {
    setCaptain(data);
  };

  const value = {
    captain,
    setCaptain,
    loading,
    setLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;