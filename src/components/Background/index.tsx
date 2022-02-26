import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

import { BackgroundProps } from "../../types";
import styles from "./styles";

import { useTheme } from "../../contexts/theme";
import { useResult } from "../../contexts/result";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";

const Area: any = Animatable.createAnimatableComponent(SafeAreaView);

const Background = ({ children }: BackgroundProps) => {
    let { theme, applyThemeResult } = useTheme();
    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResult(type);
    }, [ type ]);

    return (
        <Area 
            style={[ 
                styles.container,
                {
                    backgroundColor: theme.backgroundInterface
                }
            ]}
            transition="backgroundColor"
            duration={DURATIONTRANSITIONCOMPONENT}
        >
            { children }
        </Area>
    );
}

export default Background;