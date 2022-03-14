import { StyleProp, ViewStyle } from "react-native"
import { ThemeStateContextTypes } from "../../types";

import styles from "./style"

export const applyStyleViewButtonPrimary = (style: StyleProp<ViewStyle>) => {
    return [ 
        styles.button, 
        styles.buttonPrimary,
        style
    ]
};

export const applyStyleTextButtonPrimary = () => {
    return [
        styles.text,
        styles.textPrimary
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

export const applyStyleTextButtonGhost = (theme: ThemeStateContextTypes) => {
    return [
        styles.text,
        styles.textGhost,
        {
            color: theme.colorTextButtonGhost
        }
    ]
};