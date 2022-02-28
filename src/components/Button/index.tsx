import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./style";
import { ButtonProps } from "../../types";
import { useTheme } from "../../contexts/theme";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";

const Button = ({
    press,
    text,
    type,
    style
}: ButtonProps) => {
    const { theme } = useTheme();

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
                    <Animatable.View 
                        transition="borderColor"
                        duration={DURATIONTRANSITIONCOMPONENT}
                        style={[ 
                            styles.button, 
                            styles.buttonGhost,
                            style,
                            {
                                borderColor: theme.colorBorderButtonGhost
                            }
                        ]}
                    >
                        <Animatable.Text 
                            transition="color"
                            duration={DURATIONTRANSITIONCOMPONENT}
                            style={[
                                styles.text,
                                styles.textGhost,
                                {
                                    color: theme.colorTextButtonGhost
                                }
                            ]}
                        >
                            { text }
                        </Animatable.Text>
                    </Animatable.View>
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