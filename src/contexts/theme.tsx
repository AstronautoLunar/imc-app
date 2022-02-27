import { 
    useContext, 
    createContext,
    useState
} from "react";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import {
    ThemeStateContextTypes,
    ThemeProviderProps,
    ThemeProviderValuesTypes,
    TypesThemeResult
} from "../types";

import colors from "../styles/colors";

export const ThemeContext = createContext({} as ThemeProviderValuesTypes);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    let [ theme, setTheme ] = useState({
        backgroundInterface: colors.extra.white,
        backgroundInputs: colors.extra.gray,
        colorIconInputs: colors.extra.black,
        colorPlaceholderInputs: colors.extra.black,
        colorText: colors.extra.grayDark,
        colorIconHeader: colors.extra.black
    } as ThemeStateContextTypes);
    
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
            applyThemeResultDark(result);
        } else {
            applyThemeResultLight(result);
        }
    }

    function applyThemeResultLight(result: TypesThemeResult) {
        switch(result) {
            case "under-weight":
                setTheme({
                    backgroundInterface: colors.light.underWeight,
                    backgroundInputs: colors.dark.underWeight,
                    colorIconInputs: colors.light.underWeight,
                    colorPlaceholderInputs: colors.lightAlpha.underWeight,
                    colorText: colors.dark.underWeight,
                    colorInputText: colors.light.underWeight,
                    colorIconHeader: colors.dark.underWeight
                });
                
                break;
            case "normal":
                setTheme({
                    backgroundInterface: colors.light.normal,
                    backgroundInputs: colors.dark.normal,
                    colorIconInputs: colors.light.normal,
                    colorPlaceholderInputs: colors.lightAlpha.normal,
                    colorText: colors.dark.normal,
                    colorInputText: colors.light.normal,
                    colorIconHeader: colors.dark.normal
                });

                break;
            case "about-weight":
                setTheme({
                    backgroundInterface: colors.light.aboutWeight,
                    backgroundInputs: colors.dark.aboutWeight,
                    colorIconInputs: colors.light.aboutWeight,
                    colorPlaceholderInputs: colors.lightAlpha.aboutWeight,
                    colorText: colors.dark.aboutWeight,
                    colorInputText: colors.light.aboutWeight,
                    colorIconHeader: colors.dark.aboutWeight
                });

                break;
            case "obesity":
                setTheme({
                    backgroundInterface: colors.light.obesity,
                    backgroundInputs: colors.dark.obesity,
                    colorIconInputs: colors.light.obesity,
                    colorPlaceholderInputs: colors.lightAlpha.obesity,
                    colorText: colors.dark.obesity,
                    colorInputText: colors.light.obesity,
                    colorIconHeader: colors.dark.obesity
                });

                break;
            case "severe-obesity":
                setTheme({
                    backgroundInterface: colors.light.severeObesity,
                    backgroundInputs: colors.dark.severeObesity,
                    colorIconInputs: colors.light.severeObesity,
                    colorPlaceholderInputs: colors.lightAlpha.severeObesity,
                    colorText: colors.dark.severeObesity,
                    colorInputText: colors.light.severeObesity,
                    colorIconHeader: colors.dark.severeObesity
                });

                break;
            default:
                setTheme({
                    backgroundInterface: colors.extra.white,
                    backgroundInputs: colors.extra.gray,
                    colorIconInputs: colors.extra.black,
                    colorPlaceholderInputs: colors.extra.grayDark,
                    colorText: colors.extra.grayDark,
                    colorInputText: colors.extra.black,
                    colorIconHeader: colors.extra.black
                });
        }
    }

    function applyThemeResultDark(result: TypesThemeResult) {
        switch(result) {
            case "under-weight":
                setTheme({
                    backgroundInterface: colors.dark.underWeight,
                    backgroundInputs: colors.light.underWeight,
                    colorIconInputs: colors.dark.underWeight,
                    colorPlaceholderInputs: colors.darkAlpha.underWeight,
                    colorText: colors.light.underWeight,
                    colorInputText: colors.dark.underWeight,
                    colorIconHeader: colors.light.underWeight
                });
                
                break;
            case "normal":
                setTheme({
                    backgroundInterface: colors.dark.normal,
                    backgroundInputs: colors.light.normal,
                    colorIconInputs: colors.dark.normal,
                    colorPlaceholderInputs: colors.darkAlpha.normal,
                    colorText: colors.light.normal,
                    colorInputText: colors.dark.normal,
                    colorIconHeader: colors.light.normal
                });

                break;
            case "about-weight":
                setTheme({
                    backgroundInterface: colors.dark.aboutWeight,
                    backgroundInputs: colors.light.aboutWeight,
                    colorIconInputs: colors.dark.aboutWeight,
                    colorPlaceholderInputs: colors.darkAlpha.aboutWeight,
                    colorText: colors.light.aboutWeight,
                    colorInputText: colors.dark.aboutWeight,
                    colorIconHeader: colors.light.aboutWeight
                });

                break;
            case "obesity":
                setTheme({
                    backgroundInterface: colors.dark.obesity,
                    backgroundInputs: colors.dark.obesity,
                    colorIconInputs: colors.dark.obesity,
                    colorPlaceholderInputs: colors.darkAlpha.obesity,
                    colorText: colors.light.obesity,
                    colorInputText: colors.dark.obesity,
                    colorIconHeader: colors.light.obesity
                });

                break;
            case "severe-obesity":
                setTheme({
                    backgroundInterface: colors.dark.severeObesity,
                    backgroundInputs: colors.light.severeObesity,
                    colorIconInputs: colors.dark.severeObesity,
                    colorPlaceholderInputs: colors.darkAlpha.severeObesity,
                    colorText: colors.light.severeObesity,
                    colorInputText: colors.dark.severeObesity,
                    colorIconHeader: colors.light.severeObesity
                });

                break;
            default:
                setTheme({
                    backgroundInterface: colors.extra.black,
                    backgroundInputs: colors.extra.gray,
                    colorIconInputs: colors.extra.black,
                    colorPlaceholderInputs: colors.extra.blackAlpha,
                    colorText: colors.extra.white,
                    colorInputText: colors.extra.black,
                    colorIconHeader: colors.extra.white
                });
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