import { 
    NativeSyntheticEvent, 
    TextInputKeyPressEventData 
} from "react-native"

export type ErrorInputsProviderValues = {
    error: ValueErrorInputStateTypes;
    setError: SetErrorInputStateTypes;
    verifyInputWeight: (weight: string) => void;
    verifyInputHeight: (height: string) => void;
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

export type ValueErrorInputStateTypes = {
    weightInput: boolean;
    heightInput: boolean;
}

export type ErrorInputsProviderProps = {
    children: JSX.Element | JSX.Element[];
}

export type CheckKeyInputHeightTypes = NativeSyntheticEvent<TextInputKeyPressEventData>

type FunctionCheckKeyTypes = (e: CheckKeyInputHeightTypes) => void