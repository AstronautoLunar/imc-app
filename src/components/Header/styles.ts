import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: "100%",
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    switch: {
        transform: [
            { scale: 1.5 }
        ],
        marginLeft: 16
    }
});

export default styles;