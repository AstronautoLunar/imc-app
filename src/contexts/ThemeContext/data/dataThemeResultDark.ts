import colors from "../../../styles/colors";
import { incrementAlphaInHexColor } from "../../../utils";

export const underWeightConfigStyleDark = {
    backgroundInterface: colors.dark.underWeight,
    backgroundInputs: colors.light.underWeight,
    colorIconInputs: colors.dark.underWeight,
    colorPlaceholderInputs: colors.darkAlpha.underWeight,
    colorText: colors.light.underWeight,
    colorInputText: colors.dark.underWeight,
    colorIconHeader: colors.light.underWeight,
    colorBorderButtonGhost: colors.light.underWeight,
    colorTextButtonGhost: colors.light.underWeight,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.light.underWeight, "50"),
    colorCircleSwitch: colors.light.underWeight
};

export const normalConfigStyleDark = {
    backgroundInterface: colors.dark.normal,
    backgroundInputs: colors.light.normal,
    colorIconInputs: colors.dark.normal,
    colorPlaceholderInputs: colors.darkAlpha.normal,
    colorText: colors.light.normal,
    colorInputText: colors.dark.normal,
    colorIconHeader: colors.light.normal,
    colorBorderButtonGhost: colors.light.normal,
    colorTextButtonGhost: colors.light.normal,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.light.normal, "50"),
    colorCircleSwitch: colors.light.normal
};

export const aboutWeightConfigStyleDark = {
    backgroundInterface: colors.dark.aboutWeight,
    backgroundInputs: colors.light.aboutWeight,
    colorIconInputs: colors.dark.aboutWeight,
    colorPlaceholderInputs: colors.darkAlpha.aboutWeight,
    colorText: colors.light.aboutWeight,
    colorInputText: colors.dark.aboutWeight,
    colorIconHeader: colors.light.aboutWeight,
    colorBorderButtonGhost: colors.light.aboutWeight,
    colorTextButtonGhost: colors.light.aboutWeight,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.light.aboutWeight, "50"),
    colorCircleSwitch: colors.light.aboutWeight
};

export const obesityConfigStyleDark = {
    backgroundInterface: colors.dark.obesity,
    backgroundInputs: colors.light.obesity,
    colorIconInputs: colors.dark.obesity,
    colorPlaceholderInputs: colors.darkAlpha.obesity,
    colorText: colors.light.obesity,
    colorInputText: colors.dark.obesity,
    colorIconHeader: colors.light.obesity,
    colorBorderButtonGhost: colors.light.obesity,
    colorTextButtonGhost: colors.light.obesity,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.light.obesity, "50"),
    colorCircleSwitch: colors.light.obesity
};

export const severeObesityConfigStyleDark = {
    backgroundInterface: colors.dark.severeObesity,
    backgroundInputs: colors.light.severeObesity,
    colorIconInputs: colors.dark.severeObesity,
    colorPlaceholderInputs: colors.darkAlpha.severeObesity,
    colorText: colors.light.severeObesity,
    colorInputText: colors.dark.severeObesity,
    colorIconHeader: colors.light.severeObesity,
    colorBorderButtonGhost: colors.light.severeObesity,
    colorTextButtonGhost: colors.light.severeObesity,
    colorBackgroundSwitch: incrementAlphaInHexColor(colors.light.severeObesity, "50"),
    colorCircleSwitch: colors.light.severeObesity
};

export const defaultConfigStyleDark = {
    backgroundInterface: colors.extra.black,
    backgroundInputs: colors.extra.gray,
    colorIconInputs: colors.extra.black, 
    colorPlaceholderInputs: colors.extra.blackAlpha,
    colorText: colors.extra.white,
    colorInputText: colors.extra.black,
    colorIconHeader: colors.extra.white,
    colorBorderButtonGhost: colors.extra.gray,
    colorTextButtonGhost: colors.extra.gray,colorBackgroundSwitch:
    `${colors.extra.purpleBlue}50`,
    colorCircleSwitch: colors.extra.purpleBlue
};