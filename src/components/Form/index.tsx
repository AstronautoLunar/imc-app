import React, { useEffect } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { useResult } from '../../contexts/result';
import { useTheme } from '../../contexts/theme';
import { useErrorInputs } from '../../contexts/errorInputs';
import Button from '../Button';
import Input from '../Input';

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

    function renderButtonHiddenText() {
        return (
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
        )
    }

    function calculateIMC() {
        const { height, weight } = value;

        verifyInputHeight()
        verifyInputWeight()
        
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
            <Input
                placeholder="Peso"
                value={value.weight}
                nameIcons="weight-kilogram"
                onChangeText={changeInputWeight}
                onPressIn={hiddenTextsInterface}
            />
            <Input
                placeholder="Altura"
                value={value.height}
                nameIcons="human-male-height"
                onChangeText={changeInputHeight}
                onPressIn={hiddenTextsInterface}
                onKeyPress={checkKeyInputHeight}
            />
            <Button
                text="Calcular"
                press={calculateIMC}
                type="primary"
            />
            {
                renderButtonHiddenText()
            }
            <Button
                type='primary'
                text="Teste"
                press={() => {
                    console.log(value);
                    console.log(error);
                }}
            />
        </View>
    )
}

export default Form;