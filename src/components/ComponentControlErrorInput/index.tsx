import React, { useEffect } from "react";
import { View } from "react-native";

import { ComponentControlErrorInputsProps } from "../../types";

import { useErrorInputs } from "../../contexts/errorInputs";
import { useResult } from "../../contexts/result";

const ComponentControlErrorInputs = ({ children }: ComponentControlErrorInputsProps) => {
    const {
        verifyInputWeight,
        verifyInputHeight,
        value
    } = useErrorInputs();

    // const {
    //     result
    // } = useResult();

    // verifyInputHeight(height);
    //     verifyInputWeight(weight);

    return (
        <View
            style={{
                flex: 1
            }}
        >
            { children }
        </View>
    );
}

export default ComponentControlErrorInputs;