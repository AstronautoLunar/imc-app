import { 
    useContext, 
    createContext,
    useState
} from "react";

import { 
    ResultStateTypes,
    ResultProviderProps,
    ResultValueProvider
} from "../types";

export const ResultContext = createContext({} as ResultValueProvider);

export const ResultProvider = ({ children }: ResultProviderProps) => {
    let [ result, setResult ] = useState({
        total: null,
        type: null
    } as ResultStateTypes);

    return (
        <ResultContext.Provider value={{
            result,
            setResult
        }}>
            { children }
        </ResultContext.Provider>
    );
}

export const useResult = () => useContext(ResultContext);