import { Feather } from "@expo/vector-icons";
import { ThemeStateContextTypes } from "../../types";

export function applyIconModeDark(
        modeDark: boolean, 
        theme: ThemeStateContextTypes
): JSX.Element {
    return (
        modeDark
        ?
        <Feather
            name="moon"
            color={theme.colorIconHeader}
            size={27}
        />
        :
        <Feather
            name="sun"
            color={theme.colorIconHeader}
            size={27}
        />
    )
}

export function applyTrackColor(theme: ThemeStateContextTypes) {
    return {
        false: theme.colorBackgroundSwitch,
        true: theme.colorBackgroundSwitch
    }
}