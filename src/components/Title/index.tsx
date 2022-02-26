import React, { useEffect } from "react";
import { Text } from 'react-native';

import { TitleProps } from '../../types';
import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from "../../contexts/theme";
import { applyHiddenElement } from '../../utils';

const Title = ({ children }: TitleProps) => {
    const { hiddenTexts } = useResult();
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

    return (
        <Text style={[
            styles.title,
            {
                display: applyHiddenElement(hiddenTexts),
                color: theme.colorText
            }
        ]}>
            { children }
        </Text>
    )
}

export default Title;