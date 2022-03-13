import colors from "../../../styles/colors";
import { 
    ThemeStateContextTypes, 
    TypesThemeResult 
} from "../../../types";
import { incrementAlphaInHexColor } from "../../../utils";
import { 
    underWeightConfigStyleLight,
    normalConfigStyleLight,
    aboutWeightConfigStyleLight,
    obesityConfigStyleLight,
    severeObesityConfigStyleLight,
    defaultConfigStyleLight
} from "./dataThemeResultLight";
import { 
    underWeightConfigStyleDark,
    normalConfigStyleDark,
    aboutWeightConfigStyleDark,
    obesityConfigStyleDark,
    severeObesityConfigStyleDark,
    defaultConfigStyleDark
} from "./dataThemeResultDark";

export const dataInitialStateTheme: ThemeStateContextTypes = {
    backgroundInterface: colors.extra.white,
    backgroundInputs: colors.extra.gray,
    colorIconInputs: colors.extra.black,
    colorPlaceholderInputs: colors.extra.grayDark,
    colorText: colors.extra.grayDark,
    colorInputText: colors.extra.black,
    colorIconHeader: colors.extra.black,
    colorBorderButtonGhost: colors.extra.grayDark,
    colorTextButtonGhost: colors.extra.grayDark,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.extra.purpleBlue, "50"),
    colorCircleSwitch: colors.extra.purpleBlue
}

export function applyThemeResultLight(result: TypesThemeResult, setTheme: (value: React.SetStateAction<ThemeStateContextTypes>) => void) {
    switch(result) {
        case "under-weight":
            setTheme(underWeightConfigStyleLight);
            
            break;
        case "normal":
            setTheme(normalConfigStyleLight);

            break;
        case "about-weight":
            setTheme(aboutWeightConfigStyleLight);

            break;
        case "obesity":
            setTheme(obesityConfigStyleLight);

            break;
        case "severe-obesity":
            setTheme(severeObesityConfigStyleLight);

            break;
        default:
            setTheme(defaultConfigStyleLight);
    }
}

export function applyThemeResultDark(result: TypesThemeResult, setTheme: (value: React.SetStateAction<ThemeStateContextTypes>) => void) {
    switch(result) {
        case "under-weight":
            setTheme(underWeightConfigStyleDark);
            
            break;
        case "normal":
            setTheme(normalConfigStyleDark);

            break;
        case "about-weight":
            setTheme(aboutWeightConfigStyleDark);

            break;
        case "obesity":
            setTheme(obesityConfigStyleDark);

            break;
        case "severe-obesity":
            setTheme(severeObesityConfigStyleDark);

            break;
        default:
            setTheme(defaultConfigStyleDark);
    }
}