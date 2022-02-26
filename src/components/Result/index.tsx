import React, { useEffect } from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { 
    applyHiddenElement,
    convertTypeUSInBR
} from '../../utils';

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
        <Text 
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
        </Text>
    )
}

export default Result;