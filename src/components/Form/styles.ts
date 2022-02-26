import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globals';

const styles = StyleSheet.create({
    area: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 56
    },
    areaInput: {
        width: '100%',
        padding: 8,
        marginBottom: 24,
        backgroundColor: colors.extra.gray,
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