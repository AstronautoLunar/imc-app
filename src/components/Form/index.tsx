import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { ValueStateInputsTypes } from '../../types/FormTypes';

const Form = () => {
    const {
        result,
        setResult,
        setHiddenTexts
    } = useResult();

    const { 
        applyThemeResult,
        theme
    } = useTheme();

    const [
        value,
        setValue
    ] = useState({
        weight: 0,
        height: 0
    } as ValueStateInputsTypes);

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResult(type);
    }, [ type ]);

    function changeInputWeight(entry: string) {
        setValue({ ...value, weight: Number(entry) });
    }

    function changeInputHeight(entry: string) {
        setValue({ ...value, height: Number(entry)} );
    }

    function showTextsInterface() {
        setHiddenTexts(false);
    }

    function hiddenTextsInterface() {
        setHiddenTexts(true);
    }

    function calculateIMC() {
        const { height, weight } = value;

        const total = weight / (height * height);

        if(total < 18.5) {
            setResult({
                total,
                type: "under-weight"
            });

        } else if(total >= 18.5 && total < 25) {
            setResult({
                total,
                type: "normal"
            });

        } else if(total >= 25 && total < 30) {
            setResult({
                total,
                type: "about-weight"
            });

        } else if(total >= 30 && total < 35) {
            setResult({
                total,
                type: "obesity"
            });
            
        } else if(total >= 35) {
            setResult({
                total,
                type: "severe-obesity"
            });

        }

        showTextsInterface();
        
    }
    
    return (
        <View style={styles.area}>
            <View
                style={[
                    styles.areaInput,
                    {
                        backgroundColor: theme.backgroundInputs
                    }
                ]}
            >
                <MaterialCommunityIcons
                    name="weight-kilogram"
                    size={32}
                    color={theme.colorIconInputs}
                    style={styles.icon}
                />
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: theme.colorInputText
                        }
                    ]}
                    placeholder="Peso"
                    placeholderTextColor={theme.colorPlaceholderInputs}
                    keyboardType="numeric"
                    onChangeText={changeInputWeight}
                    onPressIn={hiddenTextsInterface}
                />
            </View>
            <View
                style={[
                    styles.areaInput,
                    {
                        backgroundColor: theme.backgroundInputs
                    }
                ]}
            >
                <MaterialCommunityIcons
                    name="human-male-height"
                    size={32}
                    color={theme.colorIconInputs}
                    style={styles.icon}
                />
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: theme.colorInputText
                        }
                    ]}
                    placeholder="Altura"
                    placeholderTextColor={theme.colorPlaceholderInputs}
                    keyboardType="numeric"
                    onChangeText={changeInputHeight}
                    onPressIn={hiddenTextsInterface}
                />
            </View>
            <TouchableOpacity
                style={styles.pressAreaButton}
                onPress={calculateIMC}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        Calcular
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;