import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import styles from "./styles";
import { ComponentControlModelDarkProps } from "../../types";
import { useTheme } from "../../contexts/theme";
import { useResult } from "../../contexts/result";

const ComponentControlModelDark = ({ children }: ComponentControlModelDarkProps) => {
    const {
        applyThemeResultControl,
        setModeDark
    } = useTheme();

    const {
        result: { type }
    } = useResult();

    useEffect(() => {
        AsyncStorageLib.getItem("@modeDark")
            .then(value => {
                if(value === "true") {
                    applyThemeResultControl(type, true);
                    setModeDark(true);
                    
                } else {
                    applyThemeResultControl(type, false);
                    setModeDark(false);

                }
            })
    }, []);

    return (
        <View style={styles.container}>
            { children }
        </View>
    )
};

export default ComponentControlModelDark;