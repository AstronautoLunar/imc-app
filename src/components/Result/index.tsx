import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { useResult } from '../../contexts/result';
import { applyHiddenElement } from '../../utils';

const Result = () => {
    let { 
        result,
        hiddenTexts
    } = useResult();

    const resultIMC = Number(result.total).toFixed(2);

    return (
        <Text 
            style={[
                styles.result,
                {
                    display: applyHiddenElement(hiddenTexts)
                }
            ]}
        >
            { 
                resultIMC
                ?
                `${resultIMC} kg/m2\n(${result.type})`
                :
                "Resultado"
            }
        </Text>
    )
}

export default Result;