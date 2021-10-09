import { createContext, useState, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [options, setOptions] = useState({ javascript: 0, go: 0, php: 0, c: 0 });

  const values = {
    options,
    setOptions,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
