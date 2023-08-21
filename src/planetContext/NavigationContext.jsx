import { createContext, useState } from "react";

export const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [active, setActive] = useState("overview");

  const contextValue = {
    active,
    setActive,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}
// export function useNavigationContext() {
//   return useContext(NavigationContext);
// }
