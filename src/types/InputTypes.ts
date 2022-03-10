import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    nameIcons?: NameIconsTypes;
    value: string;
    placeholder: string;
}

type NameIconsTypes = 
    "weight-kilogram" 
    | 
    "human-male-height";

export default InputProps;