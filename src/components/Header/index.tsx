import { 
    View, 
    Switch,
    Platform
} from "react-native";

import { useTheme } from "../../contexts/ThemeContext/theme";
import styles from "./styles";
import { 
    applyIconModeDark,
    applyTrackColor
} from "./utils";

const Header = () => {
    const {
        modeDark,
        toggleModeDark,
        theme
    } = useTheme();

    return (
        <View style={styles.header}>
            { applyIconModeDark(modeDark, theme) }
            <Switch
                style={styles.switch}
                value={modeDark}
                onValueChange={ toggleModeDark }
                trackColor={applyTrackColor(theme)}
                thumbColor={theme.colorCircleSwitch}
            />
        </View>
    )
}

export default Header;