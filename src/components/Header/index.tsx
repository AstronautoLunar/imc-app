import { 
    View, 
    Switch 
} from "react-native";

import { useTheme } from "../../contexts/theme";

import styles from "./styles"

const Header = () => {
    const {
        modeDark,
        toggleModeDark
    } = useTheme();

    return (
        <View style={styles.header}>
            <Switch
                style={styles.switch}
                value={ modeDark }
                onValueChange={ toggleModeDark }
            />
        </View>
    )
}

export default Header;