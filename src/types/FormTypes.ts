import { 
    NativeSyntheticEvent, 
    TextInputKeyPressEventData 
} from "react-native"

export type ValueStateInputsTypes = {
    weight: string,
    height: string
}

export type CheckKeyInputHeightTypes = NativeSyntheticEvent<TextInputKeyPressEventData>