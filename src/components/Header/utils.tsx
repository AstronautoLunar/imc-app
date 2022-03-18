import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

import { 
    ThemeStateContextTypes, 
    ReturnApplyPaddingVersionAndroid 
} from "../../types";

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

export const PADDING_OF_OLD_VERSION_OS = 24;
export const PADDING_OF_MODERN_VERSION_OS = 40;

type PlatformTypes = typeof Platform;

export function applyPaddingVersionAndroid(plataformObject: PlatformTypes): ReturnApplyPaddingVersionAndroid {

    if(plataformObject.OS === "android") {
        if(plataformObject.Version < 29) {
            return PADDING_OF_OLD_VERSION_OS;
        } else {
            return PADDING_OF_MODERN_VERSION_OS;
        }
    } else {
        return PADDING_OF_OLD_VERSION_OS;
    }
}