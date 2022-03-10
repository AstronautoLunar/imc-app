import colors from "../../styles/colors"
import { ThemeStateContextTypes } from "../../types"
import styles from "./styles"
import { changeColorViewError } from "./utils"

function applyStyleTextInput(theme: ThemeStateContextTypes) {
    return (
        [
            styles.input,
            {
                color: theme.colorInputText
            }
        ]
    )
}

function applyStyleView(
    isError: boolean | undefined, 
    theme: ThemeStateContextTypes
) {
    return (
        [
            styles.areaInput,
            {
                backgroundColor: theme.backgroundInputs,
                borderColor: colors.extra.danger,
                borderWidth: changeColorViewError(isError)
            }
        ]
    )
}

export {
    applyStyleTextInput,
    applyStyleView
}