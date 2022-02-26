import { 
    View, 
    Switch 
} from "react-native";

import styles from "./styles"

const Header = () => {
    return (
        <View style={styles.header}>
            <Switch
                style={styles.switch}
            />
        </View>
    )
}

export default Header;