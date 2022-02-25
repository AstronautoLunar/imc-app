import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../styles/globals';
import styles from './styles';
// import { useResult } from '../../contexts/result';

interface FormProps {
    changeInputWeight: (entry: string) => void; 
    changeInputHeight: (entry: string) => void;
    calculateIMC: () => void;
}

const Form = ({ 
    changeInputWeight, 
    changeInputHeight, 
    calculateIMC 
}: FormProps) => {
    
    return (
        <View style={styles.area}>
            <View
                style={styles.areaInput}
            >
                <MaterialCommunityIcons
                    name="weight-kilogram"
                    size={32}
                    color={colors.extra.black}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    keyboardType="numeric"
                    onChangeText={changeInputWeight}
                />
            </View>
            <View
                style={styles.areaInput}
            >
                <MaterialCommunityIcons
                    name="human-male-height"
                    size={32}
                    color={colors.extra.black}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    keyboardType="numeric"
                    onChangeText={changeInputHeight}
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