import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import styles from "./style";
import { ButtonProps } from "../../types";

const Button = ({
    press,
    text,
    type,
    style
}: ButtonProps) => {
    function selectButtonType() {
        switch(type) {
            default:
            case "primary":
                return (
                    <View style={[ 
                        styles.button, 
                        styles.buttonPrimary,
                        style
                    ]}>
                        <Text style={[
                            styles.text,
                            styles.textPrimary
                        ]}>
                            { text }
                        </Text>
                    </View>
                )
            case "ghost":
                return (
                    <View style={[ 
                        styles.button, 
                        styles.buttonGhost,
                        style
                    ]}>
                        <Text style={[
                            styles.text,
                            styles.textGhost
                        ]}>
                            { text }
                        </Text>
                    </View>
                )
        }
    }

    return (
        <TouchableOpacity
            style={styles.pressAreaButton}
            onPress={press}
        >
            { selectButtonType() }
        </TouchableOpacity>
    )
}

export default Button;