import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    nameIcons?: NameIconsTypes;
    value: string;
    placeholder: string;
    isError?: boolean;
}

type NameIconsTypes = 
    "weight-kilogram" 
    | 
    "human-male-height";

export type ErrorTypesFunctionActive = 
    boolean 
    | 
    undefined;

export default InputProps;