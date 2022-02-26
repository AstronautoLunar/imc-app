import { 
    useContext, 
    createContext,
    useState
} from "react";

import {
    ThemeStateContextTypes,
    ThemeProviderProps,
    ThemeProviderValuesTypes
} from "../types";

export const ThemeContext = createContext({} as ThemeProviderValuesTypes);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    let [ theme, setTheme ] = useState({} as ThemeStateContextTypes);

    return (
        <ThemeContext.Provider 
            value={{ 
                theme, 
                setTheme 
            } as ThemeProviderValuesTypes}
        >
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);