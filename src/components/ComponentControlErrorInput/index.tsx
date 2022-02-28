import React, { useEffect } from "react";
import { View } from "react-native";

import { ComponentControlErrorInputsProps } from "../../types";

const ComponentControlErrorInputs = ({ children }: ComponentControlErrorInputsProps) => {

    // verifyInputHeight(height);
    //     verifyInputWeight(weight);

    return (
        <View>
            { children }
        </View>
    );
}