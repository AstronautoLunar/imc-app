import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";

import { TitleProps } from '../../types';
import { useResult } from '../../contexts/result';
import { useTheme } from "../../contexts/ThemeContext/theme";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";
import { applyStyleTitle } from "./utils";

const Title = ({ children }: TitleProps) => {
    const { hiddenTexts } = useResult();
    const { 
        theme, 
        applyThemeResultControl,
        modeDark
    } = useTheme();

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResultControl(type, modeDark);
    }, [ 
        type,
        modeDark
    ]);

    return (
        <Animatable.Text 
            transition="backgroundColor"
            duration={DURATIONTRANSITIONCOMPONENT}
            style={applyStyleTitle(hiddenTexts, theme)}
        >
            { children }
        </Animatable.Text>
    )
}

export default Title;