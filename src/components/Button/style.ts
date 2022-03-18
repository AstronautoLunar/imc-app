import { StyleSheet } from "react-native";

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    pressAreaButton: {
        width: '100%',
    },
    button: {
        width: '100%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },
    buttonPrimary: {
        backgroundColor: colors.extra.purpleBlue
    },
    textPrimary: {
        color: colors.extra.white
    },
    buttonGhost: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderStyle: 'solid'
    }
});

export default styles;