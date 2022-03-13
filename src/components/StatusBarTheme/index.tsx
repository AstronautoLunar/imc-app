import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '../../contexts/ThemeContext/theme';
import { useResult } from '../../contexts/result';

const StatusBarTheme = () => {
    const { 
        modeDark,
        applyThemeResultControl
    } = useTheme();
    const { 
        result: { type }
    } = useResult();
    
    useEffect(() => {
        applyThemeResultControl(type, modeDark);
    }, [ type, modeDark ])

    return (
        <StatusBar
            translucent
            backgroundColor="transparent"
            style={
                modeDark
                ?
                "light"
                :
                "dark"
            }
        />
    )
}

export default StatusBarTheme