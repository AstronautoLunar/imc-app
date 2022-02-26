import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

import { BackgroundProps } from "../../types";
import styles from "./styles";

import { useTheme } from "../../contexts/theme";
import { useResult } from "../../contexts/result";

const Background = ({ children }: BackgroundProps) => {
    let { theme, applyThemeResult } = useTheme();
    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResult(type);
    }, [ type ]);

    return (
        <SafeAreaView style={[ 
            styles.container,
            {
                backgroundColor: theme.backgroundInterface
            }
        ]}>
            { children }
        </SafeAreaView>
    );
}

export default Background;