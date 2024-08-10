import { useContext, createContext, useState } from "react";

export const context = createContext();

function AppContext({ children }) {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  let name = "rajeev";

  return (
    <context.Provider value={{ showHeaderFooter, setShowHeaderFooter, name }}>
      {children}
    </context.Provider>
  );
}

export function contextProvider() {
  return useContext(context);
}

export default AppContext;
