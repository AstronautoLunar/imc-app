import React from 'react';
import { Text } from 'react-native';

import { ResultProps } from '../../types';

import styles from './styles';

const Result = ({ children }: ResultProps) => {
    return (
        <Text style={styles.result}>
            { children }
        </Text>
    )
}

export default Result;