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

type ApplyThemeFunction = (result: TypesThemeResult) => void;

// export type TypesTheme = {
//     light: LightThemeNames;
//     dark: DarkThemeNames;
// }

// type LightThemeNames = 
//     'under-weight-light'
//     |
//     'normal-light'
//     |
//     'about-weight-light'
//     |
//     'obesity-light'
//     |
//     'severe-obesity-light'
//     |
//     null;

// type DarkThemeNames = 
//     'under-weight-dark'
//     |
//     'normal-dark'
//     |
//     'about-weight-dark'
//     |
//     'obesity-dark'
//     |
//     'severe-obesity-dark'
//     |
//     null;

type SetThemeTypes = React.Dispatch<React.SetStateAction<ThemeStateContextTypes>>;