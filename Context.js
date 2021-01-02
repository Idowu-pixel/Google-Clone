import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [term, setTerm] = useState(null);

  return (
    <Context.Provider value={{ term, setTerm }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
