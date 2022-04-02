import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./style";
import { ButtonProps } from "../../types";
import { useTheme } from "../../contexts/ThemeContext/theme";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration";
import { 
    applyStyleViewButtonPrimary,
    applyStyleTextButtonPrimary,
    applyStyleViewButtonGhost,
    applyStyleTextButtonGhost
} from "./utils";

const Button = ({
    press,
    text,
    type,
    styleView,
    styleText
}: ButtonProps) => {
    const { theme } = useTheme();

    function selectButtonType() {
        switch(type) {
            default:
            case "primary":
                return (
                    <View style={applyStyleViewButtonPrimary(styleView)}>
                        <Text style={applyStyleTextButtonPrimary(styleText)}>
                            { text }
                        </Text>
                    </View>
                )
            case "ghost":
                return (
                    <Animatable.View 
                        transition="borderColor"
                        duration={DURATIONTRANSITIONCOMPONENT}
                        style={applyStyleViewButtonGhost(styleView, theme)}
                    >
                        <Animatable.Text 
                            transition="color"
                            duration={DURATIONTRANSITIONCOMPONENT}
                            style={applyStyleTextButtonGhost(styleText, theme)}
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