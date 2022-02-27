import { TypesThemeResult } from "./ResultContextTypes";

export type ThemeStateContextTypes = {
    colorText: string;
    backgroundInterface: string;
    backgroundInputs: string;
    colorPlaceholderInputs: string;
    colorIconInputs: string;
    colorInputText: string;
    colorIconHeader: string;
}

export type ThemeProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export type ThemeProviderValuesTypes = {
    theme: ThemeStateContextTypes;
    setTheme: SetThemeTypes;
    modeDark: boolean;
    setModeDark: SetModeDarkTypes;
    toggleModeDark: () => void;
    applyThemeResultControl: ApplyThemeFunction;
}

type ApplyThemeFunction = (result: TypesThemeResult, modeDark: boolean) => void;

type SetThemeTypes = React.Dispatch<React.SetStateAction<ThemeStateContextTypes>>;

type SetModeDarkTypes = React.Dispatch<React.SetStateAction<boolean>>;