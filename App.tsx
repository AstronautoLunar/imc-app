import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView, 
  Switch,
  View
} from 'react-native';

import { styles } from './src/styles/globals';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Switch
          style={styles.switch}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

