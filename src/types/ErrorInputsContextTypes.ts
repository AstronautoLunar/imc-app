import { 
    NativeSyntheticEvent, 
    TextInputKeyPressEventData 
} from "react-native"

export type ErrorInputsProviderValues = {
    error: ValueErrorInputStateTypes;
    setError: SetErrorInputStateTypes;
    applyLogicFeedbackInputWeight: () => void;
    applyLogicFeedbackInputHeight: () => void;
    value: ValueStateInputsTypes;
    setValue: React.Dispatch<React.SetStateAction<ValueStateInputsTypes>>;
    changeInputWeight: ((text: string) => void) | undefined;
    changeInputHeight: ((text: string) => void) | undefined;
    checkKeyInputHeight: FunctionCheckKeyTypes;
}

type SetErrorInputStateTypes = React.Dispatch<React.SetStateAction<ValueErrorInputStateTypes>>

export type ValueStateInputsTypes = {
    weight: string,
    height: string
}

export type ObjectStateErrorInputTypes = {
    isPassed: boolean;
    description: string;
}

export type ValueErrorInputStateTypes = {
    weightError: ObjectStateErrorInputTypes;
    heightError: ObjectStateErrorInputTypes;
}

export type ErrorInputsProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export type CheckKeyInputHeightTypes = NativeSyntheticEvent<TextInputKeyPressEventData>

// export type StateTypeError = 
//     "none" | "input-empty" | "letter-input";

export type ReturnVerifyInputErrorChecker = {
    isPassed: isPassedInputErrorCheckerTypes;
    description: string;
}; 

export type isPassedInputErrorCheckerTypes = boolean | null; 

type FunctionCheckKeyTypes = (e: CheckKeyInputHeightTypes) => void
