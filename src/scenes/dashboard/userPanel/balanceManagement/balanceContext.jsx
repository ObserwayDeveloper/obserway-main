import React, { createContext, useContext, useState } from 'react';

// Context for managing balance state
const BalanceContext = createContext();

// Custom hook to access balance context
export const useBalance = () => useContext(BalanceContext);

// Provider to supply balance and update functions to children components
export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0); // Initialize balance with 0

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};
