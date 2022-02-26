import React, { useEffect } from 'react';
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
        applyThemeResult 
    } = useTheme();

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResult(type);
    }, [ type ]);

    const resultIMC = Number(result.total).toFixed(2);

    return (
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
                `${resultIMC} kg/m2\n(${convertTypeUSInBR(result.type)})`
                :
                "Resultado"
            }
        </Animatable.Text>
    )
}

export default Result;