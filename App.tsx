import { StatusBar } from 'expo-status-bar';
import { 
  SafeAreaView, 
  Switch,
  View
} from 'react-native';

import { styles } from './src/styles/globals';
import { 
  Title,
  Main,
  Result,
  Form
} from './src/components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Switch
          style={styles.switch}
        />
      </View>
      <Main>
        <Title>Calculadora IMC</Title>
        
        <Result>Resultado</Result>
        <Form/>
      </Main>
    </SafeAreaView>
  );
}

