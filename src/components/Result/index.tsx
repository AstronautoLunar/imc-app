import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from "react-native-animatable";

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/ThemeContext/theme';
import DURATIONTRANSITIONCOMPONENT from '../../varDeveloper/ValueTransitionDuration';
import { 
    applyStyleTextResultNumeric, 
    applyStyleTextResultType, 
    showResultNumericIMC, 
    showResultTypeIMC
} from './utils';

const Result = () => {
    let {
        result,
        hiddenTexts
    } = useResult();

    const {
        theme,
        applyThemeResultControl,
        modeDark
    } = useTheme();

    let { type } = result;

    useEffect(() => {
        applyThemeResultControl(type, modeDark);
    }, [
        type,
        modeDark
    ]);

    const TextResultNumeric = () => (
        <Animatable.Text
            transition="color"
            duration={DURATIONTRANSITIONCOMPONENT}
            style={applyStyleTextResultNumeric(hiddenTexts, theme)}
        >
            { showResultNumericIMC(result) }
        </Animatable.Text>
    );

    const TextResultType = () => (
        <Animatable.Text
            transition="color"
            duration={DURATIONTRANSITIONCOMPONENT}
            style={applyStyleTextResultType(hiddenTexts, theme)}
        >
            { showResultTypeIMC(result) }
        </Animatable.Text>
    )

    return (
        <View style={styles.areaText}>
            <TextResultNumeric />
            <TextResultType />
        </View>
    )
}

export default Result;