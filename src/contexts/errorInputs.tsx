import {
    useContext,
    createContext,
    useState
} from "react";

import {
    ErrorInputsProviderProps,
    ValueErrorInputStateTypes,
    ErrorInputsProviderValues,
    ValueStateInputsTypes,
    CheckKeyInputHeightTypes
} from "../types";

export const ErrorInputsContext = createContext({} as ErrorInputsProviderValues);

export const ErrorInputsProvider = ({ children }: ErrorInputsProviderProps) => {
    const [
        error,
        setError
    ] = useState({
        weightInput: false,
        heightInput: false
    } as ValueErrorInputStateTypes);

    const [
        value,
        setValue
    ] = useState({
        weight: "",
        height: ""
    } as ValueStateInputsTypes);

    function verifyInputWeight(weight: string): void {
        
    }

    function verifyInputHeight(height: string): void {
        
    }

    function changeInputWeight(entry: string) {
        setValue({ ...value, weight: entry });
    }

    function changeInputHeight(entry: string) {
        setValue({ ...value, height: entry });
    }

    function checkKeyInputHeight({ nativeEvent: { key } }: CheckKeyInputHeightTypes) {
        const { height } = value;

        let arrayHeight = height.split("");

        if (arrayHeight.length === 1) {
            if (key !== "Backspace") {
                arrayHeight.push(".");

                const newHeight = arrayHeight.join("");

                setValue({ ...value, height: newHeight });
            }
        }
    }

    return (
        <ErrorInputsContext.Provider
            value={{
                error,
                setError,
                verifyInputHeight,
                verifyInputWeight,
                changeInputHeight,
                changeInputWeight,
                checkKeyInputHeight,
                value,
                setValue
            }}
        >
            {children}
        </ErrorInputsContext.Provider>
    );
}

export const useErrorInputs = () => useContext(ErrorInputsContext);