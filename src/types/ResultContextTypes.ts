export type ResultValueProvider = {
    result: ResultStateTypes;
    setResult: FunctionSetResult;
    hiddenTexts: boolean;
    setHiddenTexts: FunctionSetHiddenTexts;
}

type FunctionSetResult = React.Dispatch<React.SetStateAction<ResultStateTypes>>;

type FunctionSetHiddenTexts = React.Dispatch<React.SetStateAction<boolean>>;

export type ResultStateTypes = {
    total: TotalTypes;
    type: TypesThemeResult;
}

type TotalTypes = 
    number 
    | 
    string 
    | 
    null 
    | 
    undefined; 

type TypesThemeResult = 
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

export interface ResultProviderProps {
    children: JSX.Element | JSX.Element[];
}