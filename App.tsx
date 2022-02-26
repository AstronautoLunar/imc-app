import React, { useState, useContext } from "react"
import { 
  SafeAreaView, 
  Switch,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './src/styles/globals';
import { 
  Title,
  Main,
  Result,
  Form
} from './src/components';
import { ResultProvider } from './src/contexts/result';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ResultProvider>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Switch
            style={styles.switch}
          />
        </View>
        <Main>
          <Title>
            Calculadora IMC
          </Title>
          
          <Result/>
          <Form/>
        </Main>
        </ResultProvider>
      </SafeAreaView>
    
  );
}

