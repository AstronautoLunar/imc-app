import { TypesThemeResult } from "./ResultContextTypes";

export type ThemeStateContextTypes = {
    colorText: string;
    backgroundInterface: string;
    backgroundInputs: string;
    colorPlaceholderInputs: string;
    colorIconInputs: string;
    colorInputText: string;
}

export type ThemeProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export type ThemeProviderValuesTypes = {
    theme: ThemeStateContextTypes;
    setTheme: SetThemeTypes;
    modeDark: boolean;
    toggleModeDark: () => void;
    applyThemeResultControl: ApplyThemeFunction;
}

type ApplyThemeFunction = (result: TypesThemeResult, modeDark: boolean) => void;

type SetThemeTypes = React.Dispatch<React.SetStateAction<ThemeStateContextTypes>>;