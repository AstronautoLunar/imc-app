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

    const applyDarkMode = modeDark ? "light" : "dark"

    return (
        <StatusBar
            translucent
            backgroundColor="transparent"
            style={applyDarkMode}
        />
    )
}

export default StatusBarTheme