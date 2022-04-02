import React from "react";
import { View } from "react-native";

import { MainProps } from "../../types";
import styles from "./styles";
import AlertError from "../AlertError";

const Main = ({ children }: MainProps) => {
    return (
        <View style={styles.main}>
            { children }
            <AlertError
                visible={true}
            >
                Deu pau!!!!
            </AlertError>
        </View>
    )
}

export default Main;