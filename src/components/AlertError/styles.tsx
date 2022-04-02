import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.extra.blackAlpha
    },
    box: {
        width: "75%",
        backgroundColor: colors.extra.white,
        padding: 24,
        borderRadius: 10
    },
    areaText: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 24
    },
    text: {
        fontSize: 24,
        textAlign: "center",
        marginLeft: 16
    }
});

export default styles;