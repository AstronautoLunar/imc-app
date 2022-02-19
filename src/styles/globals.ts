import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        width: "100%",
        padding: 24,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    switch: {
        transform: [
            { scale: 1.5 }
        ]
    }
});

export {
    styles
}