import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { useErrorInputs } from '../../contexts/errorInputs';
import { 
    ValueStateInputsTypes,
    CheckKeyInputHeightTypes,
    // ErrorStateInputsTypes
} from '../../types';
import DURATIONTRANSITIONCOMPONENT from '../../varDeveloper/ValueTransitionDuration';
import Button from '../Button';

const Form = () => {
    const {
        setResult,
        setHiddenTexts,
        hiddenTexts
    } = useResult();

    const { 
        applyThemeResultControl,
        theme,
        modeDark
    } = useTheme();

    const {
        error,
        setError,
        verifyInputHeight,
        verifyInputWeight,
        checkKeyInputHeight,
        changeInputHeight,
        changeInputWeight,
        value,
        setValue
    } = useErrorInputs();

    let { 
        result: { type }
    } = useResult();

    useEffect(() => {
        applyThemeResultControl(type, modeDark);

    }, [ 
        type,
        modeDark
    ]);

    function showTextsInterface() {
        setHiddenTexts(false);
    }

    function hiddenTextsInterface() {
        setHiddenTexts(true);
    }

    function calculateIMC() {
        const { height, weight } = value;

        // verifyInputHeight(height);
        // verifyInputWeight(weight);

        

        if(weight) {
            setError({
                // ...error,
                heightInput: false,
                weightInput: false
            });

        } else {
            setError({
                // ...error,
                heightInput: true,
                weightInput: true
            });
        }

        // if(height) {
        //     setError({
        //         ...error,
        //         heightInput: false
        //     });

        // } else {
        //     setError({
        //         ...error,
        //         heightInput: true
        //     });
        // }

        console.log(value);
        console.log(error);

        // let heightNumber = Number(height);
        // let weightNumber = Number(weight);

        // const total = weightNumber / (heightNumber * heightNumber);

        // const applyResultsType = {
        //     "under-weight": () => {
        //         if(total < 18.5) {
        //             setResult({
        //                 total,
        //                 type: "under-weight"
        //             });
        //         }
        //     },
        //     "normal": () => {
        //         if(total >= 18.5 && total < 25) {
        //             setResult({
        //                 total,
        //                 type: "normal"
        //             });
        //         }
        //     },
        //     "about-weight": () => {
        //         if(total >= 25 && total < 30) {
        //             setResult({
        //                 total,
        //                 type: "about-weight"
        //             });
        //         }
        //     },
        //     "obesity": () => {
        //         if(total >= 30 && total < 35) {
        //             setResult({
        //                 total,
        //                 type: "obesity"
        //             });
        //         }
        //     },
        //     "severe-obesity": () => {
        //         if(total >= 35) {
        //             setResult({
        //                 total,
        //                 type: "severe-obesity"
        //             });
        //         }
        //     }
        // }

        // applyResultsType["under-weight"]();
        // applyResultsType["normal"]();
        // applyResultsType["about-weight"]();
        // applyResultsType["obesity"]();
        // applyResultsType["severe-obesity"]();

        showTextsInterface();
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
            <Button
                text="Calcular"
                press={calculateIMC}
                type="primary"
            />
            {
                hiddenTexts
                &&
                <Button
                    text="Mostrar Textos"
                    press={showTextsInterface}
                    type="ghost"
                    style={{
                        marginTop: 16
                    }}
                />
            }
        </View>
    )
}

export default Form;