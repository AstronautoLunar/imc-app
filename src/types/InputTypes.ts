import { 
    // NativeSyntheticEvent, 
    // NativeTouchEvent,
    TextInputProps
} from "react-native";

interface InputProps extends TextInputProps {
    nameIcons?: NameIconsTypes;
    // changeText: ChangeTextTypes;
    // pressIn: PressInTypes;
    value: string;
    placeholder: string;
}

// type ChangeTextTypes = ((text: string) => void) | undefined;

// type PressInTypes = ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined

type NameIconsTypes = 
    "weight-kilogram" 
    | 
    "human-male-height";

export default InputProps;