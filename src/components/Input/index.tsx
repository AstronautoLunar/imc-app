import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";

import styles from "./styles";
import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration"
import { useTheme } from '../../contexts/theme';
import { useErrorInputs } from '../../contexts/errorInputs';

const Input = () => {
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
                    name="weight-kilogram"
                    size={32}
                    color={theme.colorIconInputs}
                    style={styles.icon}
                />
                {/* <TextInput
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
                /> */}
            </Animatable.View>
    )
}