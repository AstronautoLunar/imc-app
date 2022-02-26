import { SafeAreaView } from "react-native";

import { BackgroundProps } from "../../types";
import styles from "./styles";

const Background = ({ children }: BackgroundProps) => {
    return (
        <SafeAreaView style={styles.container}>
            { children }
        </SafeAreaView>
    );
}

export default Background;