import colors from "../../styles/colors";
import { 
    ThemeStateContextTypes,
    ErrorTypesFunctionActive
} from '../../types';

function changeColorViewError(error?: boolean): number {
    return (
        error
        ?
        2
        :
        0
    )
}

function changeColorIconError(
    error: ErrorTypesFunctionActive, 
    theme: ThemeStateContextTypes
): string {
    return (
        error
        ?
        colors.extra.danger
        :
        theme.colorIconInputs
    )
}

function togglePlaceholder(
    error: ErrorTypesFunctionActive,
    placeholder: string
): string {
    return (
        error
        ?
        "O campo está vazio!!!"
        :
        placeholder
    )
}

function applyColorPlaceholder(
    error: ErrorTypesFunctionActive,
    theme: ThemeStateContextTypes
): string {
    return (
        error
        ?
        colors.extra.dangerAlpha
        :
        theme.colorPlaceholderInputs
    )
}

export {
    changeColorIconError,
    changeColorViewError,
    togglePlaceholder,
    applyColorPlaceholder
}