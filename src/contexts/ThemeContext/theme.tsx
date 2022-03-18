import { 
    useContext, 
    createContext,
    useState
} from "react";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import {
    ThemeProviderProps,
    ThemeProviderValuesTypes,
    TypesThemeResult
} from "../../types";

import { 
    dataInitialStateTheme, 
    applyThemeResultDark, 
    applyThemeResultLight 
} from "./data";

export const ThemeContext = createContext({} as ThemeProviderValuesTypes);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    let [ theme, setTheme ] = useState(dataInitialStateTheme);
    
    let [ modeDark, setModeDark ] = useState(false);

    async function toggleModeDark() {
        const newValue = !modeDark;

        setModeDark(newValue);

        await AsyncStorageLib.setItem("@modeDark", String(newValue));
    }

    function applyThemeResultControl(
        result: TypesThemeResult, 
        modeDark: boolean
    ) {
        if(modeDark) {
            applyThemeResultDark(result, setTheme);
        } else {
            applyThemeResultLight(result, setTheme);
        }
    }

    return (
        <ThemeContext.Provider 
            value={{ 
                theme, 
                setTheme,
                toggleModeDark,
                modeDark,
                setModeDark,
                applyThemeResultControl
            } as ThemeProviderValuesTypes}
        >
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);