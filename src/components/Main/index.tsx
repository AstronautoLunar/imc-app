import React from "react";
import { View } from "react-native";

import { MainProps } from "../../types";

import styles from "./styles";

const Main = ({ children }: MainProps) => {
    return (
        <View style={styles.main}>
            { children }
        </View>
    )
}

export default Main;