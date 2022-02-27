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
    setTheme: setThemeTypes;
    applyThemeResult: (result: TypesTheme) => void;
}

export type TypesTheme = 
    'under-weight'
    |
    'normal'
    |
    'about-weight'
    |
    'obesity'
    |
    'severe-obesity'
    |
    null;

type setThemeTypes = React.Dispatch<React.SetStateAction<ThemeStateContextTypes>>;