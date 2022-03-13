import colors from "../../../styles/colors";
import { incrementAlphaInHexColor } from "../../../utils";

export const underWeightConfigStyleLight = {
    backgroundInterface: colors.light.underWeight,
    backgroundInputs: colors.dark.underWeight,
    colorIconInputs: colors.light.underWeight,
    colorPlaceholderInputs: colors.lightAlpha.underWeight,
    colorText: colors.dark.underWeight,
    colorInputText: colors.light.underWeight,
    colorIconHeader: colors.dark.underWeight,
    colorBorderButtonGhost: colors.dark.underWeight,
    colorTextButtonGhost: colors.dark.underWeight,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.dark.underWeight, "50"),
    colorCircleSwitch: colors.dark.underWeight
};

export const normalConfigStyleLight = {
    backgroundInterface: colors.light.normal,
    backgroundInputs: colors.dark.normal,
    colorIconInputs: colors.light.normal,
    colorPlaceholderInputs: colors.lightAlpha.normal,
    colorText: colors.dark.normal,
    colorInputText: colors.light.normal,
    colorIconHeader: colors.dark.normal,
    colorBorderButtonGhost: colors.dark.normal,
    colorTextButtonGhost: colors.dark.normal,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.dark.normal, "50"),
    colorCircleSwitch: colors.dark.normal
};

export const aboutWeightConfigStyleLight = {
    backgroundInterface: colors.light.aboutWeight,
    backgroundInputs: colors.dark.aboutWeight,
    colorIconInputs: colors.light.aboutWeight,
    colorPlaceholderInputs: colors.lightAlpha.aboutWeight,
    colorText: colors.dark.aboutWeight,
    colorInputText: colors.light.aboutWeight,
    colorIconHeader: colors.dark.aboutWeight,
    colorBorderButtonGhost: colors.dark.aboutWeight,
    colorTextButtonGhost: colors.dark.aboutWeight,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.dark.aboutWeight, "50"),
    colorCircleSwitch: colors.dark.aboutWeight
};

export const obesityConfigStyleLight = {
    backgroundInterface: colors.light.obesity,
    backgroundInputs: colors.dark.obesity,
    colorIconInputs: colors.light.obesity,
    colorPlaceholderInputs: colors.lightAlpha.obesity,
    colorText: colors.dark.obesity,
    colorInputText: colors.light.obesity,
    colorIconHeader: colors.dark.obesity,
    colorBorderButtonGhost: colors.dark.obesity,
    colorTextButtonGhost: colors.dark.obesity,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.dark.obesity, "50"),
    colorCircleSwitch: colors.dark.obesity
};

export const severeObesityConfigStyleLight = {
    backgroundInterface: colors.light.severeObesity,
    backgroundInputs: colors.dark.severeObesity,
    colorIconInputs: colors.light.severeObesity,
    colorPlaceholderInputs: colors.lightAlpha.severeObesity,
    colorText: colors.dark.severeObesity,
    colorInputText: colors.light.severeObesity,
    colorIconHeader: colors.dark.severeObesity,
    colorBorderButtonGhost: colors.dark.severeObesity,
    colorTextButtonGhost: colors.dark.severeObesity,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.dark.severeObesity, "50"),
    colorCircleSwitch: colors.dark.severeObesity
};

export const defaultConfigStyleLight = {
    backgroundInterface: colors.extra.white,
    backgroundInputs: colors.extra.gray,
    colorIconInputs: colors.extra.black,
    colorPlaceholderInputs: colors.extra.grayDark,
    colorText: colors.extra.grayDark,
    colorInputText: colors.extra.black,
    colorIconHeader: colors.extra.black,
    colorBorderButtonGhost: colors.extra.grayDark,
    colorTextButtonGhost: colors.extra.grayDark,
    colorBackgroundSwitch: `${colors.extra.purpleBlue}50`,
    colorCircleSwitch: colors.extra.purpleBlue
};