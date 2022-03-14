import { 
    StyleSheet,
    StatusBar,
    Platform
} from "react-native";

const isOSSystemAndroid = Platform.OS === "android";
const OSVersionAndroid = Platform.Version <= 23;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 
            isOSSystemAndroid && OSVersionAndroid
            ?
            StatusBar.currentHeight
            :
            0
    },
});

export default styles;