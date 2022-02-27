import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { 
    ValueStateInputsTypes,
    CheckKeyInputHeightTypes
} from '../../types';
import DURATIONTRANSITIONCOMPONENT from '../../varDeveloper/ValueTransitionDuration';

const Form = () => {
    const {
        setResult,
        setHiddenTexts
    } = useResult();

    const { 
        applyThemeResultControl,
        theme,
        modeDark
    } = useTheme();

    const [
        value,
        setValue
    ] = useState({
        weight: "",
        height: ""
    } as ValueStateInputsTypes);

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResultControl(type, modeDark);

    }, [ 
        type,
        modeDark
    ]);

    function changeInputWeight(entry: string) {
        setValue({ ...value, weight: entry });
    }

    function changeInputHeight(entry: string) {
        setValue({ ...value, height: entry} );
    }

    function checkKeyInputHeight({ nativeEvent: { key } }: CheckKeyInputHeightTypes) {
        const { height } = value;

        let arrayHeight = height.split("");
        
        if(arrayHeight.length === 1) {
            if(key !== "Backspace") {
                arrayHeight.push(".");
                
                const newHeight = arrayHeight.join("");

                setValue({ ...value, height: newHeight});
            } 
        }
    }

    function showTextsInterface() {
        setHiddenTexts(false);
    }

    function hiddenTextsInterface() {
        setHiddenTexts(true);
    }

    async function calculateIMC() {
        const { height, weight } = value;

        let heightNumber = Number(height);
        let weightNumber = Number(weight);

        const total = weightNumber / (heightNumber * heightNumber);

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

    async function consoleStorageModeDark() {
        console.log(await AsyncStorageLib.getItem("@modeDark"));
    }

    return (
        <View style={styles.area}>
            <Animatable.View
                transition="backgroundColor"
                duration={DURATIONTRANSITIONCOMPONENT}
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
                    value={value.weight}
                />
            </Animatable.View>
            <Animatable.View
                transition="backgroundColor"
                duration={DURATIONTRANSITIONCOMPONENT}
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
                    onKeyPress={checkKeyInputHeight}
                    value={value.height}
                />
            </Animatable.View>
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
            <TouchableOpacity
                style={styles.pressAreaButton}
                onPress={consoleStorageModeDark}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        Test Storage
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;