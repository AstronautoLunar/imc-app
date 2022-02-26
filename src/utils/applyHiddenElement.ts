import { FlexStyle } from "react-native";

function applyHiddenElement(value: boolean): FlexStyle["display"] {
    return value ? "none" : "flex";
}

export default applyHiddenElement;