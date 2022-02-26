import React from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { useResult } from '../../contexts/result';

const Result = () => {
    let { 
        result
    } = useResult();

    const resultIMC = Number(result.total).toFixed(2);

    return (
        <Text style={styles.result}>
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