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
        weightError: false,
        heightError: false
    } as ValueErrorInputStateTypes);

    const [
        value,
        setValue
    ] = useState({
        weight: "",
        height: ""
    } as ValueStateInputsTypes);

    function applyLogicFeedbackInputWeight(): void {
        const { weight } = value;

        if(!weight) {
            error.weightError = true;

            setError(error);

        } else {
            error.weightError = false;

            setError(error);
        }
    }

    function applyLogicFeedbackInputHeight(): void {
        const { height } = value;

        if(!height) {
            error.heightError = true;

            setError(error);
            
        } else {
            error.heightError = false;

            setError(error);
        }
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

        function checkFirstLetterIsNumeric() {
            const listStrings = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "Backspace"
            ];

            return listStrings.includes(key);
        }

        if (arrayHeight.length === 1) {
            if(checkFirstLetterIsNumeric()) {
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
                applyLogicFeedbackInputHeight,
                applyLogicFeedbackInputWeight,
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