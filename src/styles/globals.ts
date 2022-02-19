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

const colors = {
    dark: {
        underWeight: '#266F8C',
        aboutWeight: '#5A4B02',
        normal: '#0D4031',
        obesity: '#984D0B',
        severeObesity: '#940A15'
    },
    normal: {
        underWeight: '#73BCD9',
        aboutWeight: '#F2CB05',
        normal: '#26BF94',
        obesity: '#F29849',
        severeObesity: '#F24452'
    },
    light: {
        underWeight: '#EBF5FA',
        aboutWeight: '#FDEB91',
        normal: '#95EAD2',
        obesity: '#FCE9D9',
        severeObesity: '#FCD4D7'
    },
    extra: {
        white: '#ffffff',
        black: '#000000',
        grayDark: '#4F4F4F',
        gray: '#C4C4C4'
    }
}

export {
    styles,
    colors
}