import React, { createContext, useState } from "react";

export const DContext = createContext();

const ContextProvider = ({ children }) => {
  const [status,setStatus]=useState(false)
  
  
  const data = {status};
  return (
    <DContext.Provider value={data}>
      {children}
    </DContext.Provider>
  );
};

export default ContextProvider;
 
