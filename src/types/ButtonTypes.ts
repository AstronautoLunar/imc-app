import { 
    GestureResponderEvent, 
    StyleProp, 
    ViewStyle 
} from "react-native";

export type ButtonProps = {
    press: PressTypes;
    text: TextTypes;
    type: TypeButtonTypes;
    style?: StyleProp<ViewStyle>
}

type PressTypes = ((event: GestureResponderEvent) => void) | undefined;

type TextTypes = string | number;

type TypeButtonTypes = "primary" | "ghost";