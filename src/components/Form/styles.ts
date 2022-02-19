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
        height: 46,
        marginBottom: 24,
        backgroundColor: colors.extra.gray,
        borderRadius: 10
    },
    input: {
        flex: 1,
        height: '100%',
    },
    pressAreaButton: {
        width: '100%',
    },
    button: {
        width: '100%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.extra.gray,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold'
    }
});

export default styles;