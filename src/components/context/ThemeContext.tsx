import { createContext } from "react";
import { theme } from "./theme";
type themeproviderprops={
    children:React.ReactNode
}
export const ThemeContext= createContext(theme)

export const ThemeContextProvider=({children}:themeproviderprops)=>{
    return <ThemeContext.Provider value={theme}> 
    {children}
    </ThemeContext.Provider>
}