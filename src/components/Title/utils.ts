import { ThemeStateContextTypes } from "../../types";
import { applyHiddenElement } from "../../utils";
import styles from "./styles";

export function applyStyleTitle(
    hiddenTexts: boolean, 
    theme: ThemeStateContextTypes
) {
    return (
        [
            styles.title,
            {
                display: applyHiddenElement(hiddenTexts),
                color: theme.colorText
            }
        ]
    )
}