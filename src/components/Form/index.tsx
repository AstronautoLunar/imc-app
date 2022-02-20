import React from 'react';
import {
    View,
    Text,
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles/globals';

import styles from './styles';

const Form = () => {
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
                />
            </View>
            <TouchableOpacity
                style={styles.pressAreaButton}
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