import React, { useEffect } from "react";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { 
  Title,
  Main,
  Result,
  Form,
  Background,
  Header,
  StatusBarTheme
} from './src/components';
import { ResultProvider } from './src/contexts/result';
import { ThemeProvider } from "./src/contexts/theme";


export default function App() {
  /**
   * Aplicando o mudança do tema salvo no app
   * Através do useEffect
   */

  return (
    <ResultProvider>
      <ThemeProvider>
        <Background>
          <StatusBarTheme/>
          <Header/>
          <Main>
            <Title>
              Calculadora IMC
            </Title>
            <Result/>
            <Form/>
          </Main>
        </Background>
      </ThemeProvider>
    </ResultProvider>
  );
}

