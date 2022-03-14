import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    areaInput: {
        width: '100%',
        padding: 8,
        marginBottom: 24,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center'
    },
    icon: {
        paddingRight: 8
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16
    },
    pressAreaButton: {
        width: '100%',
    },
    button: {
        width: '100%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.extra.purpleBlue,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.extra.white
    }
});

export default styles;