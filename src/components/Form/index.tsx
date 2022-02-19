import React from 'react';
import {
    View,
    Text,
    TextInput, 
    TouchableOpacity
} from 'react-native';

import styles from './styles';

const Form = () => {
    return (
        <View style={styles.area}>
            <View
                style={styles.areaInput}
            >
                <TextInput 
                    style={styles.input}
                    placeholder="Peso"
                />
            </View>
            <View
                style={styles.areaInput}
            >
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