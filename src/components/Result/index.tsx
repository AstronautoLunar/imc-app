import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Animatable from "react-native-animatable";

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { 
    applyHiddenElement,
    convertTypeUSInBR
} from '../../utils';
import DURATIONTRANSITIONCOMPONENT from '../../varDeveloper/ValueTransitionDuration';

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

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResultControl(type, modeDark);
    }, [ 
        type,
        modeDark
    ]);

    const resultIMC = Number(result.total).toFixed(2);

    return (
        <View style={styles.areaText}>
            <Animatable.Text 
                transition="color"
                duration={DURATIONTRANSITIONCOMPONENT}
                style={[
                    styles.result,
                    {
                        display: applyHiddenElement(hiddenTexts),
                        color: theme.colorText
                    }
                ]}
            >
                { 
                    resultIMC && Number(resultIMC) !== 0
                    ?
                    `${resultIMC} kg/m2`
                    :
                    "Resultado"
                }
            </Animatable.Text>
            <Animatable.Text 
                transition="color"
                duration={DURATIONTRANSITIONCOMPONENT}
                style={[
                    styles.resultType,
                    {
                        display: applyHiddenElement(hiddenTexts),
                        color: theme.colorText
                    }
                ]}
            >
                { 
                    resultIMC && Number(resultIMC) !== 0
                    ?
                    `(${convertTypeUSInBR(result.type)})`
                    :
                    ""
                }
            </Animatable.Text>
        </View>
    )
}

export default Result;