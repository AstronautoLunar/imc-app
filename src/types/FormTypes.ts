import { 
    NativeSyntheticEvent, 
    TextInputKeyPressEventData 
} from "react-native"

export type ValueStateInputsTypes = {
    weight: string,
    height: string
}

export type ErrorStateInputsTypes = {
    weightInput: boolean,
    heightInput: boolean
}

export type CheckKeyInputHeightTypes = NativeSyntheticEvent<TextInputKeyPressEventData>