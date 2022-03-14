import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

import { BackgroundProps } from "../../types";
import { useTheme } from "../../contexts/ThemeContext/theme";
import { useResult } from "../../contexts/result";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";
import { applyStyleArea } from "./utils";

const Area: any = Animatable.createAnimatableComponent(SafeAreaView);

const Background = ({ children }: BackgroundProps) => {
    let { 
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
        <Area 
            style={applyStyleArea(theme)}
            transition="backgroundColor"
            duration={DURATIONTRANSITIONCOMPONENT}
        >
            { children }
        </Area>
    );
}

export default Background;