import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";

import DURATIONTRANSITIONCOMPONENT from "../../varDeveloper/ValueTransitionDuration"
import { InputProps } from "../../types";
import { useTheme } from '../../contexts/theme';

import styles from "./styles";
import { 
    changeColorIconError,
    togglePlaceholder,
    applyColorPlaceholder
} from "./utils";
import { 
    applyStyleTextInput, 
    applyStyleView
} from "./dataSettings";

const Input = ({
    nameIcons,
    placeholder,
    value,
    isError,
    ...props
}: InputProps) => {
    const { theme } = useTheme();

    return (
        <Animatable.View
                transition={[
                    "backgroundColor",
                    "borderWidth"
                ]}
                duration={DURATIONTRANSITIONCOMPONENT}
                style={applyStyleView(isError, theme)}
            >
                <MaterialCommunityIcons
                    name={nameIcons}
                    size={32}
                    color={changeColorIconError(isError, theme)}
                    style={styles.icon}
                />
                <TextInput
                    style={applyStyleTextInput(theme)}
                    placeholder={togglePlaceholder(isError, placeholder)}
                    placeholderTextColor={applyColorPlaceholder(isError, theme)}
                    keyboardType="numeric"
                    value={value}
                    {...props}
                />
            </Animatable.View>
    )
}

export default Input;