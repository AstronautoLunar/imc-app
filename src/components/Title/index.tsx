import React, { useEffect } from "react";
import { Text } from 'react-native';
import * as Animatable from "react-native-animatable";

import { TitleProps } from '../../types';
import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from "../../contexts/ThemeContext/theme";
import { applyHiddenElement } from '../../utils';
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";

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
            style={[
                styles.title,
                {
                    display: applyHiddenElement(hiddenTexts),
                    color: theme.colorText
                }
            ]}
        >
            { children }
        </Animatable.Text>
    )
}

export default Title;