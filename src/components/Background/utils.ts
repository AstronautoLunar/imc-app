import styles from "./styles";
import { ThemeStateContextTypes } from "../../types";

export const applyStyleArea = (theme: ThemeStateContextTypes) => {
    return [ 
        styles.container,
        {
            backgroundColor: theme.backgroundInterface
        }
    ]
};