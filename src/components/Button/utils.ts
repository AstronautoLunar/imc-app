import { StyleProp, ViewStyle, TextStyle } from "react-native"
import { ThemeStateContextTypes } from "../../types";

import styles from "./style"

export const applyStyleViewButtonPrimary = (style: StyleProp<ViewStyle>) => {
    return [ 
        styles.button, 
        styles.buttonPrimary,
        style
    ]
};

export const applyStyleTextButtonPrimary = (style: StyleProp<TextStyle>) => {
    return [
        styles.text,
        styles.textPrimary,
        style
    ]
};

export const applyStyleViewButtonGhost = (style: StyleProp<ViewStyle>, theme: ThemeStateContextTypes) => {
    return [ 
        styles.button, 
        styles.buttonGhost,
        style,
        {
            borderColor: theme.colorBorderButtonGhost
        }
    ]
};

export const applyStyleTextButtonGhost = (style: StyleProp<TextStyle>, theme: ThemeStateContextTypes) => {
    return [
        styles.text,
        {
            color: theme.colorTextButtonGhost
        },
        style
    ]
};