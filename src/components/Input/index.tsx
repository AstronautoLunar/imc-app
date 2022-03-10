import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";

import styles from "./styles";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration"
import { useTheme } from '../../contexts/theme';
import { InputProps } from "../../types";

const Input = ({
    nameIcons,
    placeholder,
    value,
    ...props
}: InputProps) => {
    const { theme } = useTheme();

    return (
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
                    name={nameIcons}
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
                    placeholder={placeholder}
                    placeholderTextColor={theme.colorPlaceholderInputs}
                    keyboardType="numeric"
                    value={value}
                    {...props}
                />
            </Animatable.View>
    )
}

export default Input;