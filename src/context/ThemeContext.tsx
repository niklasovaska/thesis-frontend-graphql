import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    dark: boolean 
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    const [dark, setDark] = useState<boolean>(true)

    useEffect(() => {
        if (dark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }, [dark])

    const toggleTheme = () => setDark(!dark)

    return(
        <ThemeContext.Provider value={{dark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )   
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context) throw new Error('useTheme must be used inside ThemeProvider')

    return context
}