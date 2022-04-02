import { 
    GestureResponderEvent, 
    StyleProp, 
    ViewStyle,
    TextStyle
} from "react-native";

export type ButtonProps = {
    press: PressTypes;
    text: TextTypes;
    type: TypeButtonTypes;
    styleView?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
}

type PressTypes = ((event: GestureResponderEvent) => void) | undefined;

type TextTypes = string | number;

type TypeButtonTypes = "primary" | "ghost";